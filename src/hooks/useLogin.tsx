import { useState } from "react";
import { loginUserApi } from "../api/api";
import { useAuth } from "../providers/AuthProvider";
import { useNavigate } from "react-router-dom";

export default function useLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [responseRequest, setResponseRequest] = useState(0);
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            const { response } = await loginUserApi(email, password);
            setResponseRequest(response.status);
            const data = await response.json();
            const idUser = data.data.id;
            const token = data.token;

            if (response.ok) navigate("/");

            login(idUser, token);
        } catch (error) {
            console.error(error);
        }
    };

    return {
        email,
        setEmail,
        password,
        setPassword,
        handleLogin,
        responseRequest,
        setResponseRequest,
    };
}
