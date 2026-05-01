"use server";

import { supabase } from "../supabase";

export const loginData = async (email: string, password: string) => {
  try {
    const { data, error } = await supabase
      .from("users") 
      .select("*")
      .eq("email", email)
      .eq("password", password) 
      .single();
    if (error || !data) {
      return { success: false, message: "Invalid email or password" };
    }

    return { success: true, user: data };

  } catch (err) {
    return { success: false, message: "Server error" };
  }
};