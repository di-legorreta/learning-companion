import React, { useState } from "react";
import { Moon } from "lucide-react";

export default function ThemeToggle() {
   let [darkMode, setDarkMode] = useState(false);

   function toggleTheme() {
      setDarkMode(!darkMode);
      document.body.classList.toggle("dark");
   }
   return (
      <button onClick={toggleTheme}>
         <Moon />
      </button>
   );
}
