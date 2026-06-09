"use client";

import { useState, useEffect } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { onboardingQuestions } from "@/features/onboarding/questions";
import { useOnboardingStore } from "@/store/useOnboardingStore";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function RoleQuestionsContent() {
  const { selectedRole, setCapturedAnswer, capturedAnswers } =
    useOnboardingStore();
  const pathName = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  // handle user crash issue
  const questions = selectedRole ? onboardingQuestions[selectedRole] : [];
  const currentStep = Number(searchParams.get("step") || 0);
  const [answers, setAnswers] = useState<Record<number, string>>(
    () => capturedAnswers || {},
  );
  const [IsMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // redirecting user to the onboarding page if selectedRole state un-hydrates
  useEffect(() => {
    if (!IsMounted) return;

    if (!selectedRole) {
      router.replace("/onboarding");
    }
    console.log("Role", selectedRole);
  }, [selectedRole, router, IsMounted]);

  const activeQuestion = questions[currentStep];
  const totalSteps = questions.length;

  const progressPercentage =
    totalSteps > 0 ? ((currentStep + 1) / totalSteps) * 100 : 0;

  const handleOptionSelect = (option: string) => {
    const updatedAnswers = { ...answers, [currentStep]: option };

    setAnswers(updatedAnswers);
    setCapturedAnswer(updatedAnswers);
  };

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      const nextStep = currentStep + 1;
      router.push(`${pathName}?step=${nextStep}`);
    } else {
      // save answers map to Zustand
      setCapturedAnswer(answers);
      console.log(answers);

      router.push("/onboarding/complete");
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      const prevStep = currentStep - 1;
      router.push(`${pathName}?step=${prevStep}`);
    } else {
      router.push("/onboarding");
    }
  };

  if (!selectedRole || !activeQuestion) return null;

  const hasSelectedCurrentOption = answers[currentStep] !== undefined;

  return (
    <div className="flex flex-col justify-center animate-fade-in-stagger">
      <div className="flex items-center justify-between mb-4">
        <button
          type="button"
          onClick={handlePrev}
          className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer group"
        >
          <ArrowLeft
            size={13}
            className="group-hover:-translate-x-0.5 transition-transform"
          />
          Back
        </button>
        <span className="text-xs font-semibold tracking-wider uppercase text-primary">
          Question {currentStep + 1} of {totalSteps}
        </span>
      </div>

      <div className="w-full h-1 bg-muted dark:bg-slate-800 rounded-full overflow-hidden mb-8">
        <div
          className="h-full bg-primary transition-all duration-500 ease-out rounded-full shadow-[0_0_8px_rgba(37,99,235,0.4)]"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>

      <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl min-h-[4.5rem]">
        {activeQuestion.title}
      </h2>
      <p className="mt-2 text-muted-foreground text-sm">
        Choose the choice that best matches your daily operations.
      </p>

      <div className="mt-8 space-y-3">
        {activeQuestion.options.map((option) => {
          const isSelected = answers[currentStep] === option;
          return (
            <button
              key={option}
              type="button"
              onClick={() => handleOptionSelect(option)}
              className={`w-full text-left p-4 rounded-xl border transition-all duration-200 cursor-pointer select-none flex items-center justify-between group ${
                isSelected
                  ? "border-primary bg-primary/5 dark:bg-primary/10 text-foreground font-semibold"
                  : "border-border dark:border-slate-800 bg-card text-muted-foreground hover:text-foreground hover:border-border"
              }`}
            >
              <span className="text-sm tracking-tight">{option}</span>
              <div
                className={`w-4 h-4 rounded-full border flex items-center justify-center transition-all ${
                  isSelected
                    ? "border-primary bg-primary text-primary-foreground scale-110"
                    : "border-border group-hover:border-primary/40"
                }`}
              >
                {isSelected && (
                  <div className="w-1.5 h-1.5 bg-white rounded-full" />
                )}
              </div>
            </button>
          );
        })}
      </div>

      <div className="mt-8 pt-6 border-t border-border/60 dark:border-slate-800/60 flex items-center justify-between">
        <span className="text-xs text-muted-foreground italic">
          {hasSelectedCurrentOption
            ? "Selection captured"
            : "Select an answer to continue"}
        </span>
        <button
          type="button"
          disabled={!hasSelectedCurrentOption}
          onClick={handleNext}
          className="px-6 py-2.5 bg-primary disabled:opacity-50 disabled:pointer-events-none hover:bg-primary/95 text-primary-foreground font-medium text-sm rounded-xl shadow-xs transition-all flex items-center gap-2 group cursor-pointer"
        >
          {currentStep === totalSteps - 1 ? "Finish Set" : "Continue"}
          <ArrowRight
            size={15}
            className="group-hover:translate-x-0.5 transition-transform"
          />
        </button>
      </div>
    </div>
  );
}
