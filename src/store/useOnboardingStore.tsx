import { create } from "zustand";
import { persist } from "zustand/middleware";

// shape of the action and state of the store
interface OnboardingState {
  selectedRole: "student" | "lecturer" | "administrator" | null;
  capturedAnswers: Record<number, string>;
  setSelectedRole: (role: "student" | "lecturer" | "administrator") => void;
  setCapturedAnswer: (answers: Record<number, string>) => void;
  resetState: () => void;
}

// Creating store
export const useOnboardingStore = create<OnboardingState>()(
  persist(
    (set) => ({
      selectedRole: null,
      capturedAnswers: {},

      setCapturedAnswer: (answers) =>
        set((state) => ({
          capturedAnswers: { ...state.capturedAnswers, ...answers },
        })),
      setSelectedRole: (role) => set({ selectedRole: role }),
      resetState: () => set({ capturedAnswers: {}, selectedRole: null }),
    }),
    {
      name: "onboarding-cache",
    },
  ),
);

//   capturedAnswers: {},
//   selectedRole: null,
//   setCapturedAnswer: (answers) =>
//     set((state) => ({
//       capturedAnswers: { ...state.capturedAnswers, ...answers },
//     })),
//   setSelectedRole: (role) => set({ selectedRole: role }),
//   resetState: () => set({ capturedAnswers: {}, selectedRole: null }),
