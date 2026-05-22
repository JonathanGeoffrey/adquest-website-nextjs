"use client"

import { useMemo } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export type Lang = "id" | "en";

export const getLangFromRegionParam = (value: string | null): Lang => {
  return value === "ph" ? "en" : "id";
};

export const useLang = (): Lang => {
  const searchParams = useSearchParams();
  return useMemo(() => getLangFromRegionParam(searchParams.get("region")), [searchParams]);
};

export const useLangHref = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  return (lang: Lang) => {
    const params = new URLSearchParams(searchParams.toString());
    if (lang === "en") {
      params.set("region", "ph");
    } else {
      params.delete("region");
    }

    const query = params.toString();
    return query ? `${pathname}?${query}` : pathname;
  };
};
