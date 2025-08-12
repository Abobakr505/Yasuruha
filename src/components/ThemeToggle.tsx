
import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // الانتظار حتى يحدث التحميل لتجنب مشاكل العرض
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-full text-white hover:bg-white/10 transition-colors"
      aria-label="تبديل وضع الظلام"
    >
      {theme === "dark" ? (
        <Sun size={20} className="text-white" />
      ) : (
        <Moon size={20} className="text-white" />
      )}
    </button>
  );
};

export default ThemeToggle;
