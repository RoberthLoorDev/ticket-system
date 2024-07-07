import { images } from "../assets/images/images";

export default function LoginPage() {
    return (
        <div className="grid place-items-center w-screen h-screen">
            <div className="w-[352px] h-[480px] rounded-3xl flex flex-col justify-center px-[30px] shadow-2xl | login-container">
                <img className="w-auto h-[70px] mx-auto" src={images.icon_page} alt="Icon page" />
                <h2 className="text-center font-bold text-2xl">Inicio de sesion</h2>
                <span className="opacity-60">Inicie sesión para acceder al sistema </span>
                <form className="flex flex-col mt-[45px]">
                    <label htmlFor="">Email</label>

                    <div className="w-full border-2 border-[#CDD3DA] rounded-lg flex items-center">
                        <img src={images.icon_email} alt="Email" className="w-auto h-[23px] mx-2" />
                        <input
                            type="text"
                            placeholder="Ingrese su dirección de correo"
                            className="w-full h-[41px]  outline-none text-sm rounded-lg"
                        />
                    </div>

                    <label htmlFor="">Contraseña</label>

                    <div className="w-full border-2 border-[#CDD3DA] rounded-lg flex items-center mt-[20px]">
                        <img src={images.icon_password} alt="Contraseña" className="w-auto h-[23px] mx-2" />
                        <input
                            type="password"
                            placeholder="Ingrese su contraseña"
                            className="w-full h-[41px]  outline-none text-sm rounded-lg"
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-[#1195E6] hover:bg-[#0576c4] active:bg-[#055d9f] duration-100 h-[41px] rounded-lg text-white mt-[37px]"
                    >
                        Iniciar sesión
                    </button>
                </form>
            </div>
        </div>
    );
}
