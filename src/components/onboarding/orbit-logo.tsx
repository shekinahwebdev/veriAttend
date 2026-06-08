import Image from "next/image";

export function OrbitLogo() {
  return (
    <div className="relative mx-auto h-[380px] w-[320px] flex flex-col items-center justify-between">
      <div className="relative w-[320px] h-[320px] flex items-center justify-center">
        <div className="absolute inset-16 bg-primary/20 blur-3xl rounded-full pointer-events-none" />
        <div className="absolute inset-4 rounded-full border border-border/40 pointer-events-none" />
        <div className="absolute inset-4 rounded-full animate-spin-slow pointer-events-none">
          <div className="absolute inset-0 rounded-full border border-transparent [border-top-color:var(--primary)] opacity-80" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-primary shadow-[0_0_12px_var(--primary)]" />
        </div>
        <div className="relative z-10 rounded-full border border-border bg-white dark:bg-slate-900 p-8 shadow-xl dark:shadow-2xl transition-transform duration-300 hover:scale-105 flex items-center justify-center w-36 h-36">
          <div className="relative w-16 h-16 rounded-full overflow-hidden flex items-center justify-center">
            <Image
              src="/images/logo.png"
              alt="VeriAttend"
              width={64}
              height={64}
              className="object-contain dark:mix-blend-lighten contrast-[1.05]"
              priority
            />
          </div>
        </div>
      </div>
      <div className="text-center select-none mt-2 animate-fade-in-stagger delay-first">
        <h2 className="text-2xl font-bold tracking-tight text-foreground">
          Veri<span className="text-primary">Attend</span>
        </h2>
        <p className="text-xs font-medium text-muted-foreground tracking-wider uppercase mt-1">
          Let's personalize your attendance experience in under a minute.
        </p>
      </div>
    </div>
  );
}
