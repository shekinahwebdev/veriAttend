"use client";

import { useState, useTransition } from "react";
import {
  ArrowLeft,
  UserPlus,
  Lock,
  Mail,
  User,
  GraduationCap,
  Building2,
  BookOpen,
  Users,
} from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

interface SignUpFormProps {
  institutions: {
    id: string;
    name: string;
    shortName: string | null;
  }[];

  departments: {
    id: string;
    name: string;
    institutionId: string;
  }[];

  programs: {
    id: string;
    name: string;
    shortName: string | null;
    departmentId: string;
  }[];
  academicGroups: {
    id: string;
    name: string;
    level: number;
    programId: string;
    departmentId: string | null;
  }[];
}

export default function SignUpForm({
  institutions,
  departments,
  programs,
  academicGroups,
}: SignUpFormProps) {
  const [isPending, startTransition] = useTransition();
  const [selectedInstitutionId, setSelectedInstitutionId] = useState("");
  const [selectedDepartmentId, setSelectedDepartmentId] = useState("");
  const [selectedProgramId, setSelectedProgramId] = useState("");

  const searchParams = useSearchParams();
  const urlRole = searchParams.get("role");
  const urlGroupRole = searchParams.get("groupRole");

  const handleSubmit = (formData: FormData) => {
    startTransition(async () => {
      try {
        console.log("Form data submitted successfully");
      } catch (error) {
        console.error("Signup dispatch failed:", error);
      }
    });
  };

  // Shared classes to keep styling perfectly synced across all form controls
  const selectStyles =
    "w-full pl-10 pr-10 py-2.5 rounded-xl border border-border/80 bg-card focus:outline-hidden focus:ring-2 focus:ring-primary/20 focus:border-primary disabled:opacity-50 text-sm transition-all appearance-none cursor-pointer";

  return (
    <div className="flex flex-col justify-center animate-fade-in w-full max-w-md mx-auto min-h-[90vh] px-4 py-8">
      <div className="mb-3">
        <Link
          href="/onboarding"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
        >
          <ArrowLeft
            size={16}
            className="group-hover:-translate-x-0.5 transition-transform"
          />
          Back to role selection
        </Link>
      </div>

      <div className="space-y-2 mb-3">
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          Create account
        </h1>
        <p className="text-muted-foreground text-sm">
          Join VeriAttend as a{" "}
          <span className="font-semibold text-primary capitalize">
            {urlRole?.toLowerCase() || "user"}
          </span>
          {urlRole === "student" && urlGroupRole && (
            <>
              {" "}
              (
              <span className="font-medium text-foreground text-xs uppercase tracking-wider">
                {urlGroupRole.replace("_", " ")}
              </span>
              )
            </>
          )}
        </p>
      </div>
      <form action={handleSubmit} className="space-y-5">
        <input type="hidden" name="role" value={urlRole || ""} />
        <input type="hidden" name="groupRole" value={urlGroupRole || ""} />

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label
              htmlFor="firstName"
              className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
            >
              First name
            </label>
            <div className="relative">
              <User
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground/60"
                size={16}
              />
              <input
                id="firstName"
                name="firstName"
                type="text"
                required
                disabled={isPending}
                placeholder="John"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-border/80 bg-card focus:outline-hidden focus:ring-2 focus:ring-primary/20 focus:border-primary disabled:opacity-50 text-sm transition-all"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="lastName"
              className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
            >
              Last name
            </label>
            <div className="relative">
              <User
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground/60"
                size={16}
              />
              <input
                id="lastName"
                name="lastName"
                type="text"
                required
                disabled={isPending}
                placeholder="Doe"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-border/80 bg-card focus:outline-hidden focus:ring-2 focus:ring-primary/20 focus:border-primary disabled:opacity-50 text-sm transition-all"
              />
            </div>
          </div>
        </div>

        <div className="space-y-1.5">
          <label
            htmlFor="email"
            className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
          >
            Email address
          </label>
          <div className="relative">
            <Mail
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground/60"
              size={16}
            />
            <input
              id="email"
              name="email"
              type="email"
              required
              disabled={isPending}
              placeholder="john.doe@university.edu"
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-border/80 bg-card focus:outline-hidden focus:ring-2 focus:ring-primary/20 focus:border-primary disabled:opacity-50 text-sm transition-all"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label
              htmlFor="password"
              className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
            >
              Password
            </label>
            <div className="relative">
              <Lock
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground/60"
                size={16}
              />
              <input
                id="password"
                name="password"
                type="password"
                required
                disabled={isPending}
                placeholder="••••••••••••"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-border/80 bg-card focus:outline-hidden focus:ring-2 focus:ring-primary/20 focus:border-primary disabled:opacity-50 text-sm transition-all"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="confirmPassword"
              className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
            >
              Confirm Password
            </label>
            <div className="relative">
              <Lock
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground/60"
                size={16}
              />
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                disabled={isPending}
                placeholder="••••••••••••"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-border/80 bg-card focus:outline-hidden focus:ring-2 focus:ring-primary/20 focus:border-primary disabled:opacity-50 text-sm transition-all"
              />
            </div>
          </div>
        </div>

        {urlRole === "student" && (
          <div className="space-y-1.5 animate-fade-in">
            <label
              htmlFor="studentId"
              className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
            >
              Student identification number
            </label>
            <div className="relative">
              <GraduationCap
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground/60"
                size={16}
              />
              <input
                id="studentId"
                name="studentId"
                type="text"
                required
                disabled={isPending}
                placeholder="STU-2026-XXXX"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-border/80 bg-card focus:outline-hidden focus:ring-2 focus:ring-primary/20 focus:border-primary disabled:opacity-50 text-sm transition-all"
              />
            </div>
          </div>
        )}

        {urlRole === "student" && (
          <div className="space-y-1.5 animate-fade-in">
            <label
              htmlFor="institutionId"
              className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
            >
              Select your Preferred Institution
            </label>
            <div className="relative">
              <Building2
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground/60 pointer-events-none"
                size={16}
              />
              <select
                id="institutionId"
                name="institutionId"
                required
                disabled={isPending}
                className={selectStyles}
                onChange={(e) => setSelectedInstitutionId(e.target.value)}
                value={selectedInstitutionId}
              >
                <option value="">Select your Institution</option>
                {institutions.map((inst) => (
                  <option key={inst.id} value={inst.id}>
                    {inst.name} {inst.shortName ? `(${inst.shortName})` : ""}
                  </option>
                ))}
              </select>
              <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none border-l pl-2 border-border/60 text-muted-foreground/60">
                <span className="block w-2 h-2 border-r-2 border-b-2 border-current rotate-45 -mt-1" />
              </div>
            </div>
          </div>
        )}

        {urlRole === "student" && (
          <div className="space-y-1.5 animate-fade-in">
            <label
              htmlFor="departmentId"
              className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
            >
              Select your Preferred Department
            </label>
            <div className="relative">
              <Building2
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground/60 pointer-events-none"
                size={16}
              />
              <select
                id="departmentId"
                name="departmentId"
                required
                className={selectStyles}
                onChange={(e) => setSelectedDepartmentId(e.target.value)}
                value={selectedDepartmentId}
                disabled={!selectedInstitutionId || isPending}
              >
                <option value="">Select your Department</option>
                {departments
                  .filter((dep) => dep.institutionId === selectedInstitutionId)
                  .map((dep) => (
                    <option key={dep.id} value={dep.id}>
                      {dep.name}
                    </option>
                  ))}
              </select>
              <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none border-l pl-2 border-border/60 text-muted-foreground/60">
                <span className="block w-2 h-2 border-r-2 border-b-2 border-current rotate-45 -mt-1" />
              </div>
            </div>
          </div>
        )}

        {urlRole === "student" && (
          <div className="space-y-1.5 animate-fade-in">
            <label
              htmlFor="courseId"
              className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
            >
              Select your Preferred Course
            </label>
            <div className="relative">
              <BookOpen
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground/60 pointer-events-none"
                size={16}
              />
              <select
                id="courseId"
                name="courseId"
                required
                onChange={(e) => setSelectedProgramId(e.target.value)}
                className={selectStyles}
                disabled={!selectedDepartmentId || isPending}
              >
                <option value="">Select your Course</option>
                {programs
                  .filter((prg) => prg.departmentId === selectedDepartmentId)
                  .map((prg) => (
                    <option key={prg.id} value={prg.id}>
                      {prg.name} - {prg.shortName}
                    </option>
                  ))}
              </select>
              <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none border-l pl-2 border-border/60 text-muted-foreground/60">
                <span className="block w-2 h-2 border-r-2 border-b-2 border-current rotate-45 -mt-1" />
              </div>
            </div>
          </div>
        )}

        {urlRole === "student" && (
          <div className="space-y-1.5 animate-fade-in">
            <label
              htmlFor="academicGroup"
              className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
            >
              Student Group
            </label>
            <div className="relative">
              <Users
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground/60 pointer-events-none"
                size={16}
              />
              <select
                id="academicGroup"
                name="academicGroup"
                required
                className={selectStyles}
                disabled={!selectedProgramId || isPending}
              >
                <option value="">Select your Group</option>
                {(academicGroups || [])
                  .filter((acg) => acg.programId === selectedProgramId)
                  .map((acg) => (
                    <option key={acg.id} value={acg.id}>
                      {acg.name} (Level {acg.level})
                    </option>
                  ))}
              </select>
              <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none border-l pl-2 border-border/60 text-muted-foreground/60">
                <span className="block w-2 h-2 border-r-2 border-b-2 border-current rotate-45 -mt-1" />
              </div>
            </div>
          </div>
        )}

        <button
          type="submit"
          disabled={isPending}
          className="w-full mt-2 px-6 py-3 bg-primary disabled:opacity-60 hover:bg-primary/95 text-primary-foreground font-semibold text-sm rounded-xl shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
        >
          {isPending ? "Creating your workspace..." : "Register profile"}
          {!isPending && <UserPlus size={16} />}
        </button>
      </form>

      <p className="text-center text-xs text-muted-foreground mt-6">
        Already have an active account?{" "}
        <Link
          href="/login"
          className="text-primary hover:underline font-medium"
        >
          Sign in
        </Link>
      </p>
    </div>
  );
}
