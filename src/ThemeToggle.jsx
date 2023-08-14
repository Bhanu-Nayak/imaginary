import { useGlobalContext } from "./context";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = useGlobalContext();
  return (
    <section className="toggle-container">
      <button
        className="'darkkk-toggle"
        style={{
          width: "5rem",
          height: "2rem",
          display: "grid",
          placeItems: "center",
          background: "transparent",
          borderColor: "transparent",
          cursor: "pointer",
        }}
        onClick={toggleDarkTheme}
      >
        {isDarkTheme ? (
          <BsFillSunFill className="toggle-icon" />
        ) : (
          <BsFillMoonFill className="toggle-icon" />
        )}
      </button>
    </section>
  );
};
export default ThemeToggle;
