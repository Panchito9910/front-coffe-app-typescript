import type { ReactNode } from "react";
import AuthProvider from "./AuthProvider";
interface AppProvidersProps {
  children: ReactNode;
}
const AppProviders = ({ children }: AppProvidersProps) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default AppProviders;
