import { prisma } from "@/lib/prisma";
import fs from "fs";
import path from "path";

const main = async () => {
  // Locate file path
  const sqlPath = path.join(
    __dirname,
    "sql",
    "1_Instituition.sql",
    "2_Department.sql",
    "3_Course.sql",
    "4_AcademicGroup.sql",
  );

  // read raw sql string data
  const sqlData = fs.readFileSync(sqlPath, "utf8");

  // clean up the content
  const sqlStatements = sqlData
    .split(";")
    .map((statement) => statement.trim())
    .filter((statement) => statement.length > 0);

  console.log(
    `Starting execution of ${sqlStatements.length} SQL statements...`,
  );

  // Running each statement
  for (const statement of sqlStatements) {
    try {
      await prisma.$executeRawUnsafe(`${statement}`);
    } catch (error) {
      console.error(`Failed to execute: ${statement}`);
      console.error(error);
      process.exit(1);
    }
  }

  console.log("Seeding completed successfully..");
};

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
