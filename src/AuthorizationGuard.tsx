import { Navigate } from "react-router-dom";
import { getToken } from "./SessionStorageManager";

type AuthorizationProps = {
    element: React.ReactElement;
}

const AuthorizationGuard: React.FC<AuthorizationProps> = ({ element }) => {
    const jwtTok = getToken();

    if (!jwtTok) {
        return <Navigate to="/login" replace />;
    }

    return element;
};

export default AuthorizationGuard;