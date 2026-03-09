"use client";

import { usePathname, useRouter } from "next/navigation";

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const isArabic = pathname.startsWith("/ar");

  const toggleLanguage = (targetLang) => {
    let newPath = "";
    if (targetLang === "ar" && !isArabic) {
      newPath = `/ar${pathname === "/" ? "" : pathname}`;
    } else if (targetLang === "en" && isArabic) {
      newPath = pathname.replace(/^\/ar/, "") || "/";
    } else {
      return;
    }
    router.push(newPath);
  };

  return (
    <div className="relative flex items-center p-1 bg-gray-200/50 backdrop-blur-md rounded-full border border-gray-300/50 w-fit">
      {/* Sliding Active Indicator */}
      <div
        className={`absolute h-[calc(100%-8px)] w-[calc(50%-4px)] bg-white rounded-full shadow-md transition-all duration-300 ease-out ${
          isArabic ? "-translate-x-14" : "translate-x-0"
        }`}
      />

      {/* English Button */}
      <button
        onClick={() => toggleLanguage("en")}
        className={`relative z-10 px-5 py-1.5 text-xs font-bold tracking-wider transition-colors duration-300 rounded-full ${
          !isArabic ? "text-grey-600!" : "text-black-500! hover:text-black-800!"
        }`}
      >
        EN
      </button>

      {/* Arabic Button */}
      <button
        onClick={() => toggleLanguage("ar")}
        className={`relative z-10 px-5 py-1.5 text-xs font-bold tracking-wider transition-colors duration-300 rounded-full ${
          isArabic ? "text-black-600!" : "text-black-500! hover:text-black-800!"
        }`}
      >
        AR
      </button>
    </div>
  );
}