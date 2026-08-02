import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

const COLUMNS = [
  "createdAt",
  "fullName",
  "company",
  "mobile",
  "email",
  "location",
  "needs",
  "productName",
  "industry",
  "productSize",
  "quantity",
  "material",
  "printing",
  "deliveryDate",
  "notes",
] as const;

function escapeCsvCell(value: unknown) {
  const str = value === null || value === undefined ? "" : String(value);
  if (/[",\n]/.test(str)) {
    return `"${str.replace(/"/g, '""')}"`;
  }
  return str;
}

export async function GET() {
  const submissions = await prisma.contactSubmission.findMany({
    orderBy: { createdAt: "desc" },
  });

  const header = COLUMNS.join(",");
  const rows = submissions.map((submission) =>
    COLUMNS.map((col) =>
      escapeCsvCell(
        col === "createdAt"
          ? submission.createdAt.toISOString()
          : submission[col as keyof typeof submission]
      )
    ).join(",")
  );

  const csv = [header, ...rows].join("\n");

  return new NextResponse(csv, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="packbeyond-submissions-${new Date()
        .toISOString()
        .slice(0, 10)}.csv"`,
    },
  });
}
