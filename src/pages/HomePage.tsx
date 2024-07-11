import React, { useEffect, useState } from "react";
import GlobalLayout from "../layouts/GlobalLayout";
import { createTicket, getTicketsForUserId } from "../api/api";
import { useAuth } from "../providers/AuthProvider";
import { GetTicketsUserInterface, PostTicketInterface } from "../types/interaces";
import { images } from "../assets/images/images";
import { PriorityType, StatusTicketType } from "../types/constants";
import { capitalizeFirstLetter, refactorDate } from "../utils/utills";

export default function HomePage() {
    const { userId, token } = useAuth();
    const [formCreateTicket, setFormCreateTicket] = useState<PostTicketInterface>({
        user_id: Number(userId),
        subject: "",
        description: "",
        priority: "",
        department: "",
    });

    const [ticketsFromConsult, setTicketsFromConsult] = useState<GetTicketsUserInterface[]>([]);

    useEffect(() => {
        const getTickets = async () => {
            if (!userId || !token) return;
            const { ticketsForUser } = await getTicketsForUserId(token, userId);
            setTicketsFromConsult(ticketsForUser);
        };
        getTickets();
    }, []);

    const handleChangeForm = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;

        setFormCreateTicket((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!token) return;
        createTicket(formCreateTicket, token);
    };

    const shadowPriorityPoint = {
        alta: { boxShadow: "0px 0px 5px 2px #FF1616", backgroundColor: "#FF1616" },
        media: { boxShadow: "0px 0px 5px 2px #FC0", backgroundColor: "#FC0" },
        baja: { boxShadow: "0px 0px 5px 2px #42BE65", backgroundColor: "#42BE65" },
        urgente: { boxShadow: "0px 0px 5px 2px #242424", backgroundColor: "#242424" },
    };

    const tagsForStatusTicket = {
        nuevo: { backgroundColor: "#C9DBFE", borderWidth: "2px", borderColor: "#4A87FA", color: "#4A87FA" },
        en_proceso: { backgroundColor: "#FFE0C9", borderWidth: "2px", borderColor: "#FB8", color: "#FB8" },
        pendiente: { backgroundColor: "#FFE0C9", borderWidth: "2px", borderColor: "#FB8", color: "#FB8" },
        resuelto: {
            backgroundColor: "#D5EDDA",
            borderWidth: "2px",
            borderColor: "#73C385",
            color: "#73C385",
        },
    };

    const getShadowPriorityPoint = (priority: PriorityType) => {
        return shadowPriorityPoint[priority];
    };

    const getStatusForTicket = (status: string) => {
        const newStatus = status.replace(/ /g, "_") as StatusTicketType;

        return tagsForStatusTicket[newStatus];
    };

    return (
        <GlobalLayout title="Home">
            <div className="px-7 flex flex-col items-center">
                {/* <form action="" className="flex flex-col" onSubmit={handleSubmit}>
                    <label htmlFor="">Usuario</label>
                    <input type="text" disabled placeholder={formCreateTicket.user_id.toString()} />
                    <label htmlFor="">Área del solicitante</label>
                    <select name="department" onChange={handleChangeForm}>
                        <option value="">Seleccione un departamento</option>
                        <option value="Administración">Administración</option>
                        <option value="Finanzas">Finanzas</option>
                        <option value="Recursos Humanos">Recursos Humanos</option>
                        <option value="Ventas">Ventas</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Producción">Producción</option>
                        <option value="Investigación y Desarrollo">Investigación y Desarrollo</option>
                        <option value="Servicio al Cliente">Servicio al Cliente</option>
                        <option value="Logística">Logística</option>
                        <option value="Tecnología de la Información">Tecnología de la Información</option>
                    </select>

                    <select name="priority" onChange={handleChangeForm}>
                        <option value="baja">Baja</option>
                        <option value="media">Media</option>
                        <option value="alta">Alta</option>
                    </select>

                    <label htmlFor="">Asunto</label>
                    <input type="text" name="subject" onChange={handleChangeForm} />

                    <label htmlFor="">Descripción</label>
                    <textarea name="description" onChange={handleChangeForm}></textarea>

                    <button type="submit" className="bg-gray-400">
                        Crear ticket
                    </button>
                </form> */}

                <button className="w-[143px] h-[41px] rounded-[8px] border-[2px] border-[#161C2C] flex justify-center items-center gap-2 mt-10">
                    <img src={images.icon_ticket} alt="Crear Ticket" className="w-auto h-[24px]" />
                    <span className="font-semibold">Crear Ticket</span>
                </button>

                <div className="overflow-x-auto py-2">
                    <table className="mt-5 text-[#161C2C] w-full max-w-[150rem]" cellPadding={10}>
                        <thead className="bg-[#DFDFDF] h-[57px]">
                            <tr className="text-left mb-2">
                                <th className="px-7">Ticket</th>
                                <th className="pl-3">Asunto</th>
                                <th className="pl-3">Prioridad</th>
                                <th className="pl-3">Área</th>
                                <th className="pl-3">Fecha de creación</th>
                                <th className="pl-3">Estado</th>
                                <th className="pl-3">Fecha de resolución</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm">
                            {ticketsFromConsult.map((ticket, key) => (
                                <tr key={key} className="h-12">
                                    <td className="px-7">ID2983Y74</td>

                                    <td className="px-3 min-w-[12rem]">{ticket.subject}</td>

                                    <td className="px-3 ">
                                        <div className="flex justify-center items-center gap-2">
                                            <div
                                                style={getShadowPriorityPoint(
                                                    ticket.priority as PriorityType
                                                )}
                                                className="w-[8px] h-[8px] rounded-full"
                                            ></div>
                                            <span>{capitalizeFirstLetter(ticket.priority)}</span>
                                        </div>
                                    </td>

                                    <td className="px-3">{ticket.department}</td>

                                    <td className="px-3 min-w-[8rem] ">
                                        {refactorDate(ticket.creation_date)}
                                    </td>

                                    <td className="w-[120px]">
                                        <div className="flex justify-center items-center  h-12 w-full">
                                            <span
                                                style={getStatusForTicket(ticket.status as string)}
                                                className="w-[100px] h-[30px] flex justify-center items-center rounded-full "
                                            >
                                                <span className="">
                                                    {capitalizeFirstLetter(ticket.status as string)}
                                                </span>
                                            </span>
                                        </div>
                                    </td>

                                    <td className="px-3">
                                        {ticket.resolution_date ? ticket.resolution_date : "Por definir"}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </GlobalLayout>
    );
}
