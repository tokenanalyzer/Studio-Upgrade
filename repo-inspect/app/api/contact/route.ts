import { NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@/lib/supabase/server";
import { contactSchema } from "@/lib/validations/contact";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validated = contactSchema.parse(body);

    const supabase = await createServerClient();
    const { error } = await supabase.from("leads").insert({
      name: validated.name,
      email: validated.email,
      company: validated.company || null,
      budget: validated.budget || null,
      service: validated.service,
      message: validated.message,
      status: "new",
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Invalid request data" },
      { status: 400 }
    );
  }
}
