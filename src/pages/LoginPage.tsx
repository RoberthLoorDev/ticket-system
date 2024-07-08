import { useEffect } from "react";
import { images } from "../assets/images/images";
import IncorrectLogin from "../components/ui/IncorrectLogin";
import useLogin from "../hooks/useLogin";
import { apyTypesRequestLogin } from "../types/constants";
import { useAuth } from "../providers/AuthProvider";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
    const { setEmail, setPassword, responseRequest, handleLogin } = useLogin();
    const { token } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (token) navigate("/");
    }, []);

    return (
        <div className="grid place-items-center w-screen h-screen">
            <div className="w-[352px] h-[480px] rounded-3xl flex flex-col px-[20px] shadow-2xl | login-container">
                <img className="w-auto h-[70px] mx-auto mt-8" src={images.icon_page} alt="Icon page" />
                <h2 className="text-center font-bold text-2xl">Inicio de sesion</h2>
                <span className="opacity-60">Inicie sesión para acceder al sistema </span>

                {responseRequest === 0 || responseRequest === 200 ? (
                    ""
                ) : (
                    <IncorrectLogin message={apyTypesRequestLogin[responseRequest]}></IncorrectLogin>
                )}

                {/* form */}
                <form className="flex flex-col" onSubmit={handleLogin}>
                    <label htmlFor="" className="mt-[30px]">
                        Email
                    </label>
                    <div className="w-full border-2 border-[#CDD3DA] rounded-lg flex items-center">
                        <img src={images.icon_email} alt="Email" className="w-auto h-[23px] mx-2" />
                        <input
                            type="text"
                            placeholder="Ingrese su dirección de correo"
                            className="w-full h-[41px]  outline-none text-sm rounded-lg"
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                        />
                    </div>

                    <label htmlFor="" className="mt-[20px]">
                        Contraseña
                    </label>
                    <div className="w-full border-2 border-[#CDD3DA] rounded-lg flex items-center ">
                        <img src={images.icon_password} alt="Contraseña" className="w-auto h-[23px] mx-2" />
                        <input
                            type="password"
                            placeholder="Ingrese su contraseña"
                            className="w-full h-[41px]  outline-none text-sm rounded-lg"
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-[#1195E6] hover:bg-[#0576c4] active:bg-[#055d9f] duration-100 h-[41px] rounded-lg text-white mt-[30px]"
                    >
                        Iniciar sesión
                    </button>
                </form>
            </div>
        </div>
    );
}
