"use client";

import { useTheme } from "next-themes";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

const ThemeToggle = () => {
  let { resolvedTheme, setTheme } = useTheme();
  let otherTheme = resolvedTheme === "dark" ? "light" : "dark";

  return (
    <button
      className="dark:hover:bg-dark-gary hover:bg-dark-gary/10 flex cursor-pointer items-center justify-center rounded-full p-2"
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
