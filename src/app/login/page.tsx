"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "lucide-react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      // 🔴 IMPORTANT CHECK
      if (res.ok && data.success) {
        router.push("/homepage");
      } else {
        alert(data.message || "Invalid credentials");
      }

    } catch (error) {
      console.error("Login failed", error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-grid-pattern bg-neutral-50/50 px-4">
      <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent pointer-events-none" />

      <Card className="w-full max-w-md rounded-3xl border-neutral-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] glass transition-all duration-500 hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)]">
        <CardHeader className="space-y-3 pt-10 text-center">
          <CardTitle className="text-3xl font-bold tracking-tight text-neutral-900">
            Welcome to ApnaStay
          </CardTitle>

        </CardHeader>

        <CardContent className="pb-10 px-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-xs uppercase tracking-widest font-bold text-neutral-500 ml-1">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="name@company.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 rounded-xl border-neutral-200 bg-white/50 focus:bg-white focus-visible:ring-2 focus-visible:ring-black/5 transition-all"
                />
              </div>

              {/* Password */}
              <div className="space-y-2">
                <div className="flex items-center justify-between ml-1">
                  <Label htmlFor="password" className="text-xs uppercase tracking-widest font-bold text-neutral-500">
                    Password
                  </Label>
                  <span className="text-xs font-semibold text-neutral-400 hover:text-black cursor-pointer transition-colors">
                    Forgot password?
                  </span>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-12 rounded-xl border-neutral-200 bg-white/50 focus:bg-white focus-visible:ring-2 focus-visible:ring-black/5 transition-all"
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full h-12 rounded-xl bg-black text-white hover:bg-neutral-800 shadow-lg shadow-black/10 active:scale-[0.98] transition-all font-semibold"
            >
              Sign in
            </Button>

            <div className="relative flex items-center py-2">
              <div className="flex-grow border-t border-neutral-200"></div>
              <span className="flex-shrink mx-4 text-xs font-bold text-neutral-400 uppercase tracking-widest">Or</span>
              <div className="flex-grow border-t border-neutral-200"></div>
            </div>

            <p className="text-center text-sm text-neutral-500 font-medium">
              New here?{" "}
              <span className="text-black font-bold cursor-pointer hover:underline underline-offset-4">
                Create an account
              </span>
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}