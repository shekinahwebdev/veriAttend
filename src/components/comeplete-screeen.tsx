"use client";

import React from "react";
import {
  CheckCircle2,
  ArrowRight,
  LogIn,
  UserPlus,
  HelpCircle,
} from "lucide-react";

interface CompletionProps {
  role: string;
  answers: Record<number, string>;
}

export default function CompleteScreen() {
  return (
    <div className="flex flex-col justify-center items-center animate-fade-in-stagger max-w-md mx-auto lg:max-w-none">
      <div className="w-16 h-16 rounded-full bg-primary/10 dark:bg-primary/15 text-primary flex items-center justify-center border border-primary/20 mb-2">
        <CheckCircle2 size={22} className="text-primary" />
      </div>
      <div className="flex flex-col gap-2 mb-5 lg:mb-6">
        <h2 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-4xl text-center">
          Thanks for your interaction!
        </h2>
      </div>
      <div className="lg:pt-6 pt-5 flex flex-col gap-4">
        <div>
          <p className="text-base text-foreground text-center">
            Ready to get started?
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-3 mt-1">
          <button
            type="button"
            onClick={() => (window.location.href = "/register")}
            className="w-full py-3 px-4 bg-primary hover:bg-primary/95 text-primary-foreground font-semibold text-sm rounded-xl shadow-xs transition-all flex items-center justify-center gap-2 group cursor-pointer"
          >
            <UserPlus size={15} />
            Create an Account
            <ArrowRight
              size={14}
              className="group-hover:translate-x-0.5 transition-transform"
            />
          </button>
          <button
            type="button"
            onClick={() => (window.location.href = "/login")}
            className="w-full py-3 px-4 bg-muted hover:bg-accent hover:text-accent-foreground text-foreground border border-border/80 font-medium text-sm rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <LogIn size={15} className="text-muted-foreground" />
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}
