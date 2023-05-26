import { ReactNode, createContext, useState } from "react";
import { useQuery } from "react-query";
import { getRandomUser } from "../utils/api";

interface UserContextProps {
  username?: string;
  apiUser?: string;
  isLoggedIn: boolean;
  loginUser: (username: string) => void;
  logoutUser: () => void;
}

export const UserContext = createContext<UserContextProps>({
  isLoggedIn: false,
  loginUser: (username) => username,
  logoutUser: () => undefined,
});

const UserProvider = ({ children }: { children: ReactNode }) => {
  const [currentUsername, setCurrentUsername] = useState<string>();

  const { data, isLoading } = useQuery("user", getRandomUser);

  const apiUser = isLoading ? "Loading..." : data.results[0].login.username;

  const username = currentUsername ? currentUsername : "No current user";

  const isLoggedIn = currentUsername ? true : false;

  const loginUser = (username: string) => {
    setCurrentUsername(username);
  };

  const logoutUser = () => {
    setCurrentUsername(undefined);
  };

  return (
    <UserContext.Provider
      value={{ username, apiUser, isLoggedIn, loginUser, logoutUser }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
