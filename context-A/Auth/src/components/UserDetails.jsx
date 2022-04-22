import { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";

export const UserData = () => {
  const { auth } = useContext(AuthContext);
  const [user, setUser] = useState({
    data: {
      id: 0,
      email: "",
      first_name: "",
      last_name: "",
      avatar: "",
    },
  });

  useEffect(() => {
    if (auth === true) {
      fetch(`https://reqres.in/api/users/${Math.floor(Math.random() * 12 + 1)}`)
        .then((response) => response.json())
        .then((data) => setUser(data));
    }
  }, [auth]);
  return <div>{auth === true ? <SignIn user={user} /> : <SignUp />}</div>;
};