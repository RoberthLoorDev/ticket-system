import { useAuth } from "../../providers/AuthProvider";
import { images } from "../../assets/images/images";

export default function VerticalNavbar() {
    const { logout } = useAuth();

    return (
        <div className="h-full min-w-[255px] shadow-2xl relative">
            <div className="fixed min-w-[255px] h-screen  shadow-navbar overflow-y-auto">
                <div className="w-full flex justify-center mt-4">
                    <img src={images.icon_page} alt="Icono de la página" className="w-auto h-[58px]" />
                </div>

                {/* options navbar */}

                <div className="flex flex-col  cursor-not-allowed opacity-50">
                    <div className="flex items-center gap-2 w-full h-[60px] px-5">
                        <img src={images.icon_home} alt="Home" className="w-[23px]" />
                        <span>Página principal</span>
                    </div>
                </div>

                <div className="flex flex-col  cursor-not-allowed opacity-50">
                    <div className="flex items-center gap-2 w-full h-[60px] px-5">
                        <img src={images.icon_facturation} alt="Home" className="w-[23px]" />
                        <span>Facturación </span>
                    </div>
                </div>
                <div className="flex flex-col  cursor-not-allowed opacity-50">
                    <div className="flex items-center gap-2 w-full h-[60px] px-5">
                        <img src={images.icon_nomina} alt="Home" className="w-[23px]" />
                        <span>Nómina</span>
                    </div>
                </div>
                <div className="flex flex-col  cursor-not-allowed opacity-50">
                    <div className="flex items-center gap-2 w-full h-[60px] px-5">
                        <img src={images.icon_report} alt="Home" className="w-[23px]" />
                        <span>Informe de facturación </span>
                    </div>
                </div>
                <div className="flex flex-col  cursor-not-allowed opacity-50">
                    <div className="flex items-center gap-2 w-full h-[60px] px-5">
                        <img src={images.icon_reconciliation} alt="Home" className="w-[23px]" />
                        <span>Conciliación Bancaria</span>
                    </div>
                </div>

                <div className="flex flex-col bg-[#4A87FA] cursor-pointer">
                    <div className="flex items-center gap-2 w-full h-[60px] px-5">
                        <img src={images.icon_support} alt="Home" className="w-[23px]" />
                        <span className="text-white">Solicitar soporte</span>
                    </div>
                </div>

                <div className="flex w-full px-5 items-center h-[58px] absolute bottom-10 bg-white z-50">
                    <img src={images.icon_user} alt="Usuario" />
                    <div className="flex flex-col ml-3 flex-1 truncate">
                        <span className="font-semibold truncate">Ronaldo Choez</span>
                        <span className="-mt-1">Adminsitrador</span>
                    </div>
                    <img
                        src={images.icon_logout}
                        alt="Cerrar sesión"
                        className="w-auto h-[23px] hover:scale-125 duration-150 cursor-pointer"
                        onClick={logout}
                    />
                </div>
            </div>
        </div>
    );
}
