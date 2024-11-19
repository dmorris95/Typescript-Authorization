import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const HomePage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <Container>
            <div>
                Welcome to this incredible application.
                <br/>
                <Button onClick={() => navigate('/login')}>
                    Login
                </Button>
            </div>
        </Container>
    )
};

export default HomePage;