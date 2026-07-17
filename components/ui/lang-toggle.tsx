"use client";

import { useT, useChangeLanguage } from "next-i18next/client";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import { MdLanguage } from "react-icons/md";

const LANGUAGES = [
  { code: "en", label: "English 🇺🇸", dir: "ltr" },
  { code: "ar", label: "العربية 🇦🇪", dir: "rtl" },
] as const;

export default function LangToggle() {
  const changeLanguage = useChangeLanguage();
  const { i18n } = useT();
  const current = i18n.language?.startsWith("ar") ? "ar" : "en";

  return (
    <Menu as="div" className="relative">
      <MenuButton
        aria-label="Change language"
        className="dark:hover:bg-dark-gary hover:bg-dark-gary/10 flex cursor-pointer items-center justify-center rounded-full p-2 dark:text-white"
      >
        <MdLanguage size={18} />
      </MenuButton>
      <MenuItems
        anchor="bottom end"
        transition
        className="border-overlay dark:border-charcoal-gray dark:bg-charcoal-black z-[1000] mt-2 w-36 origin-top rounded-xl border bg-white p-1 shadow-lg transition duration-150 ease-out focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
      >
        {LANGUAGES.map((lang) => (
          <MenuItem key={lang.code}>
            <button
              type="button"
              dir={lang.dir}
              onClick={() => changeLanguage(lang.code)}
              className={`data-[focus]:bg-dark-gary/10 dark:data-[focus]:bg-dark-gary flex w-full cursor-pointer items-center justify-between rounded-lg px-3 py-2 text-sm dark:text-white ${
                current === lang.code ? "font-semibold" : ""
              }`}
            >
              {lang.label}
              {current === lang.code && (
                <span className="text-purple text-xs">●</span>
              )}
            </button>
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
}
