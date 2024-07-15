import { useEffect, useState } from "react";
import { images } from "../assets/images/images";
import ModalCreateTicket from "../components/layout/ModalCreateTicket";
import TicketTableComponent from "../components/layout/TicketTableComponent";
import { useUserData } from "../hooks/useUserData";
import GlobalLayout from "../layouts/GlobalLayout";
import { useAuth } from "../providers/AuthProvider";
import { UserInterface } from "../types/interaces";

export default function HomePage() {
    const { token, userId, logout } = useAuth();
    if (!token || !userId) return;
    const [showModalCreate, setShowModalCreate] = useState(false);
    const { infoUser } = useUserData(userId, token);

    useEffect(() => {
        let timeoutId: any;

        if (!infoUser) {
            timeoutId = setTimeout(() => {
                console.log("No hay usuario");
                logout();
            }, 2000);
        }

        return () => clearTimeout(timeoutId);
    }, [infoUser, logout]);

    const handleModal = () => {
        setShowModalCreate(!showModalCreate);
    };

    return (
        <GlobalLayout title="Solicitar soporte">
            <div className="px-7 flex flex-col items-center relative">
                {/* Show and hide modal for create ticket */}
                {showModalCreate ? (
                    <ModalCreateTicket closeModal={handleModal} infoUser={infoUser as UserInterface} />
                ) : (
                    ""
                )}

                <button
                    className="w-[143px] h-[41px] rounded-[8px] border-[2px] border-[#161C2C] flex justify-center items-center gap-2 mt-10"
                    onClick={handleModal}
                >
                    <img src={images.icon_ticket} alt="Crear Ticket" className="w-auto h-[24px]" />
                    <span className="font-semibold">Crear Ticket</span>
                </button>

                <TicketTableComponent />
            </div>
        </GlobalLayout>
    );
}
