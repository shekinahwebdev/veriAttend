import { prisma } from "@/lib/prisma";
import { execSync } from "child_process";
import fs from "fs";
import path from "path";

const main = async () => {
  // List of all files in order of database dependency
  const sqlFiles = [
    "1_Institution.sql",
    "2_Department.sql",
    "3_Programs.sql",
    "4_AcademicGroup.sql",
  ];

  console.log("Cleaning up old data spaces cleanly...");

  // wipe out the schema entirely
  await prisma.$executeRawUnsafe(
    `DROP SCHEMA public CASCADE; CREATE SCHEMA public;`,
  );

  console.log("🛠️ Syncing database tables structural layout...");
  execSync("npx prisma db push", { stdio: "inherit" });

  for (const file of sqlFiles) {
    console.log("Running fresh seed scripts...");
    // Locate file path
    const sqlPath = path.join(process.cwd(), "prisma", "sql", file);

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
        // fixing case-sensitivity in prisma
        const fixedStatement = statement
          .replace(/insert into Institution/g, 'insert into "Institution"')
          .replace(/insert into Department/g, 'insert into "Department"')
          .replace(/insert into Program/g, 'insert into "Program"')
          .replace(/insert into AcademicGroup/g, 'insert into "AcademicGroup"');

        await prisma.$executeRawUnsafe(`${fixedStatement}`);
      } catch (error) {
        console.error(`Failed to execute: ${statement}`);
        console.error(error);
        process.exit(1);
      }
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
