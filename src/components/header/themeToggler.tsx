"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "../global";

export default function ThemeToggler() {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      <Button
        className="p-2  dark:text-white  text-dark"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "light" ? <Sun size={17} /> : <Moon size={17} />}
      </Button>
    </div>
  );
}
