"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const isArabic = pathname.startsWith("/ar");

  // Logic to generate paths for the Link components
  const getArPath = () => {
    if (isArabic) return pathname;
    return `/ar${pathname === "/" ? "/" : pathname}`;
  };

  const getEnPath = () => {
    if (!isArabic) return pathname;
    const pathWithoutAr = pathname.replace(/^\/ar/, "");
    // Ensure it doesn't return an empty string
    return pathWithoutAr === "" ? "/" : pathWithoutAr;
  };

  return (
    <div className="relative flex items-center p-1 bg-white/20 backdrop-blur-md rounded-full border border-gray-300/50 w-fit" dir="ltr">
      {/* Sliding Active Indicator */}
      <div
        className={`absolute h-[calc(100%-8px)] w-[calc(50%-4px)] bg-white rounded-full shadow-md transition-all duration-300 ease-out ${isArabic ? "translate-x-full" : "translate-x-0"
          }`}
        style={{ width: 'calc(50% - 4px)' }}
      />

      {/* English Link */}
      <Link
        href={getEnPath()}
        className={`relative z-10 px-5 py-1.5 text-xs font-bold tracking-wider transition-colors duration-300 rounded-full text-center ${!isArabic ? "text-primary" : "text-white"
          }`}>
        EN
      </Link>

      {/* Arabic Link */}
      <Link
        href={getArPath()}
        className={`relative z-10 px-5 py-1.5 text-xs font-bold tracking-wider transition-colors duration-300 rounded-full text-center ${isArabic ? "text-primary" : "text-white"
          }`}>
        AR
      </Link>
    </div>
  );
}