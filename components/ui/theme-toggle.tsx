"use client";

import { useTheme } from "next-themes";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

const ThemeToggle = () => {
  let { resolvedTheme, setTheme } = useTheme();
  let otherTheme = resolvedTheme === "dark" ? "light" : "dark";

  return (
    <button
      aria-label="Toggle theme"
      className="dark:hover:bg-dark-gary hover:bg-dark-gary/10 flex cursor-pointer items-center justify-center rounded-full p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal focus-visible:ring-offset-2 dark:focus-visible:ring-white"
      onClick={() => setTheme(otherTheme)}
    >
      <MdOutlineDarkMode size={18} className="dark:hidden dark:text-white" />
      <MdOutlineLightMode
        size={18}
        className="hidden dark:block dark:text-white"
      />
    </button>
  );
};
export default ThemeToggle;
