## Development Journal

### 2026-06-9

#### Featured Completed:

- Set up the project structure and initialized the development environment.
- Implemented database schema and created the necessary tables for users, courses, attendance records, etc.
- Implemented welcome and onboarding pages with a user-friendly interface where users can select their role (student, lecturer, class representative, administrator) and proceed with the appropriate onboarding process.

### Challenges Faced:

- How to apply a consistent flow for the onboarding process that caters to different user roles while maintaining a seamless user experience.
- How to ensure captured answers from the onboarding process are stored securely and can be easily retrieved when user refreshes the page
- How to design a store that can manage the state of the onboarding process effectively, allowing for smooth transitions between steps and ensuring data integrity throughout the process.

### Solutions Implemented:

- Implemented a step-based onboarding process that guides users through the necessary steps based on their selected role, ensuring a tailored experience for each user type while maintaining a consistent flow.
- Utilized local storage to securely store captured answers from the onboarding process, allowing for easy retrieval and persistence of data even when the user refreshes the page.
- Designed a centralized store using a state management library using Zustand to manage the state of the onboarding process effectively, ensuring smooth transitions between steps and maintaining data integrity throughout the process. This store allows for easy access to onboarding data across different components and ensures that the user's progress is tracked accurately.

### Lessions Learned:

- The importance of designing a user-friendly onboarding process that caters to different user roles while maintaining a consistent flow to enhance user experience and engagement.
- The significance of securely storing user data during the onboarding process to ensure data integrity and provide a seamless experience even when users refresh the page.
- The value of implementing a centralized state management solution to effectively manage the state of the onboarding process, ensuring smooth transitions between steps and maintaining data integrity throughout the user journey.
- How to use Zustand for state management in a React application, allowing for efficient and scalable state management across components.
- How to use persist middleware in Zustand to enable data persistence in local storage, ensuring that user data is retained even when the page is refreshed.
- The importance of testing and validating the onboarding process to ensure that it works as intended and provides a positive user experience for all user roles.

### 2026-06-10

#### Featured Completed:

- Added attributes in the database schema to connect users roles and groups to the institution they belong to, ensuring that data is organized and associated correctly within the system.
- Added attributes in the database schema to store user captured answers from the onboarding process, allowing for easy retrieval and use of this data in the future.
- Implemented functionality to capture and store user answers during the onboarding process, ensuring that this data is securely stored and can be accessed when needed, even if the user refreshes the page.

### Feature In Process:

- Implementing signUp and login functionality for users, allowing them to create accounts and access the system securely based on their roles.
- Implementing role-based access control to ensure that users can only access features and data relevant to their roles, enhancing security and user experience within the system.

### Challenges Faced:

- How to implement syn changes from user select role and group to authentication pagee(signup page) to ensure that the user's selections are accurately reflected in the authentication process and that they can access the appropriate features based on their roles and groups.
- How to re-structure the authentication process to accommodate different user roles and groups while maintaining a secure and user-friendly experience for all users.
- -How to restructure the database schema to effectively manage and store user data, including their roles, groups, and captured answers from the onboarding process, while ensuring data integrity and security within the system.

### Lessons Learned:

- The importance of designing a flexible and scalable database schema that can accommodate various user roles and groups while maintaining data integrity and organization within the system.
- Use useSearchParams hook to manage query parameters in the URL, allowing for dynamic updates to the authentication page based on user selections during the onboarding process.
- The significance of implementing secure authentication mechanisms to protect user data and ensure that users can access the system based on their roles and permissions, enhancing overall security and user experience within the application.
- Fix the bug of the onboarding process where user selections were not being accurately reflected in the authentication page, ensuring a seamless and consistent user experience throughout the onboarding and authentication process.
