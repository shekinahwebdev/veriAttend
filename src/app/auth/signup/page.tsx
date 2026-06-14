import SignUpForm from "@/components/signupform";
import { prisma } from "@/lib/prisma";

const SignUpPage = async () => {
  // Fetch data lists from PostgreSql server
  const institution = await prisma.institution.findMany({
    orderBy: { name: "asc" },
  });

  console.log(institution);

  const department = await prisma.department.findMany({
    orderBy: { name: "asc" },
  });
  const program = await prisma.program.findMany({
    orderBy: { name: "asc" },
  });

  const academicGroup = await prisma.academicGroup.findMany({});

  return (
    <SignUpForm
      programs={program}
      departments={department}
      institutions={institution}
      academicGroups={academicGroup}
    />
  );
};

export default SignUpPage;
