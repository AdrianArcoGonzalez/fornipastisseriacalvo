"use server";

import { cookies } from "next/headers";
import { isLocale } from "@/i18n/locales";

export async function setLocale(locale: string) {
  if (!isLocale(locale)) {
    throw new Error("Unsupported locale");
  }

  const store = await cookies();
  store.set("locale", locale, { path: "/", sameSite: "lax" });
}
