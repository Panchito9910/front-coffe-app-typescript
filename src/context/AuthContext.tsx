import { createContext } from "react";
export type AuthContextProps = {
  accessToken: string | null;
  refreshToken: string | null;
  setTokens: (newAccessToken: string, newRefreshToken: string) => void;
  logout: () => void;
  isAuth: boolean;
};
export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps
);
