import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs"; // 🔥 IMPORTANT

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function POST(req: Request) {
  try {
    console.log("LOGIN API HIT"); 

    const { email, password } = await req.json();
    console.log("email and Password : ",email, password);
    const { data: user, error } = await supabase
      .from("users")
      .select("id, email, password")
      .eq("email", email)
      .maybeSingle();
    console.log("data is ", user );
    if (!user) {
      console.log("user is ,", user);
      return NextResponse.json(
        { success: false, message: " user not found, Invalid credentials" },
        { status: 401 }
      );
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return NextResponse.json(
        { success: false, message: "Password is wrong, Invalid credentials" },
        { status: 401 }
      );
    }

    return NextResponse.json({ success: true });

  } catch (err) {
    console.error("LOGIN ERROR: inside catch block", err); // 👈 IMPORTANT
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}