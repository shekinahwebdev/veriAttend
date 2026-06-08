## Database Design

The database design for the Veri-Attend system is structured to efficiently manage and store data related to users, attendance records, courses, and other relevant information. The design follows a relational database model, ensuring data integrity and facilitating easy retrieval of information.

### Entity-Relationship Diagram (ERD)

The ERD for the Veri-Attend system includes the following entities:

1. **Institution**: Represents the educational institution using the system. Attributes include InstitutionID, Name, Address, and ContactInfo.
2. **Department**: Represents the various departments within the institution. Attributes include DepartmentID, Name, and InstitutionID (foreign key).
3. **AcademicGroup**: Represents the academic groups or faculties within the institution. Attributes include AcademicGroupID, Name, and InstitutionID (foreign key).
4. **User**: Represents the users of the system, including students, lecturers, class representatives, and administrators. Attributes include UserID, Name, Email, PasswordHash, Role, and InstitutionID (foreign key).
5. **Course**: Represents the courses offered by the institution. Attributes include CourseID, Name, Code, DepartmentID (foreign key), and AcademicGroupID (foreign key).
6. **CourseOffering**: Represents the specific offerings of courses in different semesters. Attributes include CourseOfferingID, CourseID (foreign key), Semester, and Year.
7. **Enrollment**: Represents the enrollment of students in courses. Attributes include EnrollmentID, UserID (foreign key), CourseOfferingID (foreign key), and EnrollmentDate.
8. **AttendanceSession**: Represents the attendance sessions for each course offering. Attributes include AttendanceSessionID, CourseOfferingID (foreign key), SessionDate, and SessionType.
9. **AttendanceRecord**: Represents the attendance records for each session. Attributes include AttendanceRecordID, AttendanceSessionID (foreign key), UserID (foreign key), and Status (e.g., Present, Absent, Late).

### Database Diagram

```Institution
│
├── Departments
│
└── Courses

Department
│
├── AcademicGroups

AcademicGroup
│
├── Students
│
├── CourseOfferings

Course
│
├── CourseOfferings

Lecturer
│
├── CourseOfferings

CourseOffering
│
├── AttendanceSessions
├
├── Enrollments

AttendanceSession
│
└── AttendanceRecords
```

### Database Schema
