"use client";

import { useState, useEffect } from "react";
import {
  ArrowRight,
  User,
  GraduationCap,
  ShieldAlert,
  Sun,
  Moon,
} from "lucide-react";
import { useTheme } from "next-themes";
import { UserRole } from "@/features/onboarding/questions";
import { useOnboardingStore } from "@/store/useOnboardingStore";
import { useRouter } from "next/navigation";

const roles: { id: UserRole; label: string; desc: string; icon: any }[] = [
  {
    id: "student",
    label: "Student",
    desc: "View registers & check-in",
    icon: User,
  },
  {
    id: "lecturer",
    label: "Lecturer",
    desc: "Manage classes & sessions",
    icon: GraduationCap,
  },
  {
    id: "administrator",
    label: "Admin",
    desc: "System settings & audits",
    icon: ShieldAlert,
  },
];

export default function OnboardingContainer() {
  const [activeIndex, setActiveIndex] = useState(0);
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { selectedRole, setSelectedRole } = useOnboardingStore();

  useEffect(() => {
    setMounted(true);
    if (selectedRole) {
      const targetIndex = roles.findIndex((r) => r.id === selectedRole);
      if (targetIndex !== -1) setActiveIndex(targetIndex);
    }
  }, [selectedRole]);

  return (
    <div className="flex flex-col justify-center animate-fade-in-stagger w-full">
      <div className="flex items-center justify-between mb-4">
        <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-primary/90 bg-primary/10 dark:bg-primary/15 px-3 py-1 rounded-full w-fit">
          Main board
        </div>
        {mounted && (
          <button
            type="button"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-xl border border-border/80 bg-card hover:bg-accent hover:text-accent-foreground text-muted-foreground transition-all duration-200 cursor-pointer shadow-xs flex items-center justify-center w-9 h-9"
          >
            {theme === "dark" ? (
              <Sun size={16} className="text-amber-500" />
            ) : (
              <Moon size={16} className="text-slate-700" />
            )}
          </button>
        )}
      </div>

      <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
        Who are you?
      </h1>
      <p className="mt-3 text-muted-foreground text-base max-w-md">
        Select your role to personalize your experience. You can always change
        this later in your profile settings.
      </p>

      <div className="mt-7 lg:mt-10 p-1.5 bg-muted/50 dark:bg-slate-900/90 border border-border/80 dark:border-slate-800/60 rounded-2xl relative flex flex-col md:flex-row w-full gap-1 shadow-inner">
        <div
          className="absolute bg-card dark:bg-slate-950 border border-border/70 dark:border-slate-800 shadow-xs rounded-xl transition-all duration-300 ease-out hidden md:block"
          style={{
            width: `calc((100% - 12px) / 3)`,
            height: "calc(100% - 12px)",
            transform: `translateX(calc(${activeIndex} * (100% + 4px)))`,
            top: "6px",
            left: "6px",
          }}
        />
        {roles.map((role, idx) => {
          const Icon = role.icon;
          const isSelected = selectedRole === role.id;

          return (
            <button
              key={role.id}
              type="button"
              onClick={() => {
                setSelectedRole(role.id);
                setActiveIndex(idx);
              }}
              className={`flex-1 relative z-10 flex flex-col items-center md:items-start text-center md:text-left p-5 rounded-xl transition-all duration-200 cursor-pointer select-none group ${
                isSelected
                  ? "bg-card dark:bg-slate-950 md:bg-transparent text-foreground font-medium"
                  : "text-muted-foreground hover:text-foreground/80"
              }`}
            >
              <div
                className={`p-2.5 rounded-lg border transition-all lg:mb-3 mt-2 ${
                  isSelected
                    ? "bg-primary text-primary-foreground border-primary dark:border-blue-500 scale-105"
                    : "bg-background dark:bg-slate-900 border-border dark:border-slate-800 text-muted-foreground group-hover:border-primary/30"
                }`}
              >
                <Icon size={18} />
              </div>
              <span
                className={`font-semibold text-sm tracking-tight ${isSelected ? "text-foreground" : "text-muted-foreground"}`}
              >
                {role.label}
              </span>
              <span className="text-xs text-muted-foreground/70 dark:text-muted-foreground/60 mt-1 hidden md:block leading-normal">
                {role.desc}
              </span>
            </button>
          );
        })}
      </div>

      <div className="mt-5 lg:mt-10 flex items-center justify-center border-t border-border/60 dark:border-slate-800/60 pt-6">
        <button
          type="button"
          disabled={!selectedRole}
          onClick={() => router.push("/onboarding/questions")}
          className="w-full sm:w-auto px-6 py-2.5 bg-primary disabled:opacity-50 disabled:pointer-events-none hover:bg-primary/95 text-primary-foreground font-medium text-sm rounded-xl shadow-xs transition-all flex items-center justify-center gap-2 group cursor-pointer"
        >
          Continue Setup
          <ArrowRight
            size={15}
            className="group-hover:translate-x-0.5 transition-transform"
          />
        </button>
      </div>
    </div>
  );
}
