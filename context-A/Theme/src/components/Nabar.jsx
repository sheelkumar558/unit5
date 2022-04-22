import{ Button} from "../styeld/Button"
import { Nav } from "../styeld/Nav";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export const Navbar = () => {
  const { theme, handleTheme } = useContext(ThemeContext);
  return (
    <Nav theme={theme}>
      <Button
        theme={theme}
        onClick={() => {
          handleTheme();
        }}
        style={{
          position: "absolute",
          right: 2,
          top: 2,
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          borderRadius: "5px",
        }}
      >
        {theme === "dark" ? (
          <i class="fa-solid fa-sun"></i>
        ) : (
          <i class="fa-solid fa-moon"></i>
        )}
        {theme}
      </Button>
    </Nav>
  );
};