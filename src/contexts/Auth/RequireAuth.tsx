import { useContext } from "react";
import { Login } from "../../pages/Login";
import { AuthContext } from "./AuthContext";

export const RequireAuth = ({ children, level }: { children: JSX.Element, level?: number }) => {
    const auth = useContext(AuthContext);

    if (!auth.user) {
       return <Login />;
    } else {
        if (level) {
            if (auth.user.level < level) {
                return <Login />;
            }
        }
    }

    return children;
}