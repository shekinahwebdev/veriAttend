import { OrbitLogo } from "@/components/orbit-logo";
import React from "react";

export default function OnboardingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen bg-background text-foreground flex items-center justify-center px-6 relative overflow-hidden transition-colors duration-300">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 dark:bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="w-full max-w-5xl grid lg:grid-cols-2 gap-12 lg:gap-8 items-center relative z-10">
        <div className="flex items-center justify-center py-6">
          <OrbitLogo />
        </div>
        <div className="w-full max-w-md mx-auto lg:max-w-none">{children}</div>
      </div>
    </main>
  );
}
