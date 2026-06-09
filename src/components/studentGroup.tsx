import { GroupRole } from "@/types/auth";
import { User, ShieldAlert, ShieldCheck } from "lucide-react";

export const groupRoles: {
  id: GroupRole;
  label: string;
  desc: string;
  icon: any;
}[] = [
  {
    id: "MEMBER",
    label: "Regular Student",
    desc: "Standard access to check-in & view logs",
    icon: User,
  },
  {
    id: "MAIN_REP",
    label: "Main Representative",
    desc: "Permissions to open sessions & manage logs",
    icon: ShieldCheck,
  },
  {
    id: "ASSISTANT_REP",
    label: "Assistant Representative",
    desc: "Backup manager for class registers",
    icon: ShieldAlert,
  },
];

interface StudentGroupProps {
  activeIndex: number;
  onRoleSelect: (index: number) => void;
  groupRoles: Array<{ id: GroupRole; label: string; desc: string; icon: any }>;
  selectedGroupRole: GroupRole | null;
  setSelectedGroupRole: (role: GroupRole) => void;
}

export function StudentGroup({
  activeIndex,
  onRoleSelect,
  groupRoles,
  selectedGroupRole,
  setSelectedGroupRole,
}: StudentGroupProps) {
  return (
    <div className="animate-fade-in">
      <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
        Student Status
      </h1>
      <p className="mt-3 text-muted-foreground text-base max-w-md">
        Specify your structural position within your academic group matrix.
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

        {groupRoles.map((gRole, idx) => {
          const Icon = gRole.icon;
          const isSelected = selectedGroupRole === gRole.id;

          return (
            <button
              key={gRole.id}
              type="button"
              onClick={() => {
                setSelectedGroupRole(gRole.id);
                onRoleSelect(idx);
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
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-background dark:bg-slate-900 border-border"
                }`}
              >
                <Icon size={18} />
              </div>
              <span className="font-semibold text-sm tracking-tight">
                {gRole.label}
              </span>
              <span className="text-xs text-muted-foreground/70 mt-1 hidden md:block leading-normal">
                {gRole.desc}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
