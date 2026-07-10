"use server";

import { cookies } from "next/headers";
import { SignJWT } from "jose";

const SECRET = new TextEncoder().encode(process.env.ADMIN_PASSWORD || "admin");

export async function loginAction(password: string) {
  if (password === process.env.ADMIN_PASSWORD) {
    const alg = "HS256";
    const jwt = await new SignJWT({ auth: true })
      .setProtectedHeader({ alg })
      .setIssuedAt()
      .setExpirationTime("24h")
      .sign(SECRET);

    (await cookies()).set("admin_token", jwt, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24, // 24 hours
      path: "/",
    });
    return { success: true };
  }
  return { success: false, error: "Invalid password" };
}

export async function logoutAction() {
  (await cookies()).delete("admin_token");
}
