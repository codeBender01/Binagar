import { FC } from "react";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { useTheme } from "../store/themeContext";

const ThemeToggleButton: FC = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      className="relative w-[44px] h-[44px] sm:w-[48px] sm:h-[48px] flex items-center justify-center rounded-full transition-all duration-200 hover:opacity-80 active:scale-95"
      aria-label="Toggle theme"
      role="switch"
      aria-checked={isDark}
      style={{
        backgroundColor: 'var(--color-cardBg)',
        border: '1px solid var(--color-borderGray)',
      }}
    >
      {/* Sun Icon */}
      <div
        className={`absolute transition-all duration-300 ${
          !isDark
            ? "opacity-100 rotate-0 scale-100"
            : "opacity-0 rotate-90 scale-0"
        }`}
      >
        <MdOutlineLightMode
          size={20}
          style={{ color: 'var(--color-text-primary)' }}
        />
      </div>

      {/* Moon Icon */}
      <div
        className={`absolute transition-all duration-300 ${
          isDark
            ? "opacity-100 rotate-0 scale-100"
            : "opacity-0 -rotate-90 scale-0"
        }`}
      >
        <MdOutlineDarkMode
          size={20}
          style={{ color: 'var(--color-text-primary)' }}
        />
      </div>
    </button>
  );
};

export default ThemeToggleButton;
