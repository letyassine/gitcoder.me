"use client";
import { useTheme } from "next-themes";

const ThemeToggle = () => {
  let { resolvedTheme, setTheme } = useTheme();
  let otherTheme = resolvedTheme === "dark" ? "light" : "dark";

  return (
    <button className="cursor-pointer" onClick={() => setTheme(otherTheme)}>
      <div className="size-3 rounded-full bg-black dark:bg-white" />
    </button>
  );
};
export default ThemeToggle;
