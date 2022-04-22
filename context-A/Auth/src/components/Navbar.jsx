import { useContext } from "react";
import { ThemeContext } from "styled-components";
import { AuthContext } from "../context/AuthContext";
import { Button } from "./styled/Button";
import { Nav } from "./styled/Nav";

export const Navbar = () => {
  const { auth, handleAuth } = useContext(AuthContext);
  return (
    <Nav>
      <Button
        onClick={() => {
          handleAuth();
        }}
      >
        {auth === false ? "Login" : "Logout"}
      </Button>
    </Nav>
  );
};