import { Button, Container } from "react-bootstrap";
import { removeToken } from "./SessionStorageManager";
import { useNavigate } from "react-router-dom";

const ProtectedPage: React.FC = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        removeToken();
        navigate('/');
    }
    return (
        <Container>
            <div>This is a protected page.</div>
            <Button onClick={handleLogout}>
                Logout
            </Button>
        </Container>
    )
};

export default ProtectedPage;