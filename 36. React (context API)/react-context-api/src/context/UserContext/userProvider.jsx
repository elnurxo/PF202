import { useState } from "react";
import UserContext from "./userContext";

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (fakeUser) => {
    setUser(fakeUser);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
