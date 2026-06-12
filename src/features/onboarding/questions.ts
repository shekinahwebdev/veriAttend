import { UserRole } from "@/types/auth";

export interface Question {
  title: string;
  options: string[];
}

export const onboardingQuestions: Record<UserRole, Question[]> = {
  student: [
    {
      title: "What challenge do you face most often regarding attendance?",
      options: [
        "Forgetting attendance sessions",
        "Missing attendance records",
        "Tracking my attendance percentage",
        "Managing attendance across multiple courses",
      ],
    },
    {
      title: "How do you currently monitor your attendance?",
      options: [
        "I don’t track it",
        "Through my lecturer",
        "Through a school portal",
        "Manually",
      ],
    },
    {
      title: "What feature would help you the most?",
      options: [
        "Attendance reminders",
        "Real-time attendance updates",
        "Attendance analytics",
        "All of the above",
      ],
    },
    {
      title: "How often do you check your attendance records?",
      options: ["Daily", "Weekly", "Monthly", "Only before exams"],
    },
    {
      title: "What would motivate you to attend classes more regularly?",
      options: [
        "Attendance insights",
        "Performance tracking",
        "Notifications and reminders",
        "Department requirements",
      ],
    },
  ],

  lecturer: [
    {
      title: "What consumes most of your time during attendance management?",
      options: [
        "Taking attendance manually",
        "Verifying students",
        "Tracking absenteeism",
        "Preparing attendance reports",
      ],
    },
    {
      title: "How do you currently record attendance?",
      options: [
        "Paper sheets",
        "Excel spreadsheets",
        "School management system",
        "Other methods",
      ],
    },
    {
      title: "Which attendance issue do you encounter most often?",
      options: [
        "Attendance fraud",
        "Late arrivals",
        "Missing records",
        "Large class sizes",
      ],
    },
    {
      title: "Which report would be most valuable to you?",
      options: [
        "Attendance percentages",
        "Frequent absentees",
        "Course attendance trends",
        "Department-wide reports",
      ],
    },
    {
      title: "What would improve your attendance workflow the most?",
      options: [
        "Automated attendance",
        "Student verification",
        "Instant reporting",
        "Attendance analytics",
      ],
    },
  ],

  administrator: [
    {
      title: "What is your biggest attendance management challenge?",
      options: [
        "Attendance fraud",
        "Data management",
        "Department reporting",
        "User administration",
      ],
    },
    {
      title: "What is your primary responsibility?",
      options: [
        "Managing users",
        "Managing departments",
        "Generating reports",
        "System oversight",
      ],
    },
    {
      title: "Which metric is most important to monitor?",
      options: [
        "Student attendance rates",
        "Lecturer participation",
        "Department performance",
        "System activity",
      ],
    },
    {
      title: "What type of report do you generate most often?",
      options: [
        "Department reports",
        "Institution-wide reports",
        "Attendance summaries",
        "Student performance reports",
      ],
    },
    {
      title: "What would make attendance management easier?",
      options: [
        "Better analytics",
        "Automated reporting",
        "Improved user management",
        "Attendance fraud detection",
      ],
    },
  ],
};
