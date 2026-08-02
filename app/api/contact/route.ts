import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);

  if (!body) {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const fullName = String(body.fullName ?? "").trim();
  const mobile = String(body.mobile ?? "").trim();
  const location = String(body.location ?? "").trim();
  const quantity = String(body.quantity ?? "").trim();
  const needs: string[] = Array.isArray(body.needs) ? body.needs : [];

  if (!fullName || !mobile || !location || !quantity) {
    return NextResponse.json(
      { error: "Please fill in all required fields." },
      { status: 400 }
    );
  }

  const submission = await prisma.contactSubmission.create({
    data: {
      fullName,
      mobile,
      location,
      quantity,
      needs: needs.join(", "),
      company: body.company ? String(body.company) : null,
      email: body.email ? String(body.email) : null,
      productName: body.productName ? String(body.productName) : null,
      industry: body.industry ? String(body.industry) : null,
      productSize: body.productSize ? String(body.productSize) : null,
      material: body.material ? String(body.material) : null,
      printing: body.printing ? String(body.printing) : null,
      deliveryDate: body.deliveryDate ? String(body.deliveryDate) : null,
      notes: body.notes ? String(body.notes) : null,
    },
  });

  return NextResponse.json({ ok: true, id: submission.id });
}
