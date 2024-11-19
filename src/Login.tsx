import axios from "axios";
import { Container, Form, Button, Alert } from "react-bootstrap";
import { useState } from "react";
import { saveJWTToken } from "./SessionStorageManager";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');
    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await axios.post('https://fakestoreapi.com/auth/login', {
                username,
                password,
            });
            console.log(response);
            const jwtToken = response.data.token;
            saveJWTToken(jwtToken);
            setError('');
            navigate('/protected');
            
        } catch (err) {
            setError('Invalid username or password');
        }
    };

    return (
        <Container>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleLogin} className="m-3 bg-light p-3">
            <h3 className="text-center display-5">User Login</h3>
            <Form.Group className="mb-3">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text"
                    name="username" required
                    placeholder="Enter username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="text"
                    name="password" required
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </Form.Group>
            <Button type="submit" className="m-1">
                Login
            </Button>
        </Form>
        </Container>
    )
}; 

export default Login