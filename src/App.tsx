import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import AuthProvider from "./providers/AuthProvider";
import PrivateRoutes from "./PrivateRoutes";
import { useEffect } from "react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
    useEffect(() => {
        document.title = "Iniciar sesión";
    }, []);

    return (
        <div className="App">
            <ToastContainer />
            <AuthProvider>
                <Routes>
                    <Route element={<PrivateRoutes />}>
                        <Route path="/" element={<HomePage />}></Route>
                    </Route>
                    <Route path="/login" element={<LoginPage />}></Route>
                </Routes>
            </AuthProvider>
        </div>
    );
}

export default App;
