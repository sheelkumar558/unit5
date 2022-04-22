import { useEffect, useState } from "react";
import axios from "axios";

export const UserList = () => {
  const [users, setUser] = useState([]);
  useEffect(() => {
    axios.get("https://reqres.in/api/users").then(({ data }) => {
      setUser(data.data);
    });
  }, []);
  return (
    <div>
      {users.map((user) => (
        <p key={user.id}>
            {user.id}- {user.first_name} {user.last_name}
        </p>
      ))}
    </div>
  );
};
