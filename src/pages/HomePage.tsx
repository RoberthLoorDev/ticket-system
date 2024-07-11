import React, { useEffect, useState } from "react";
import GlobalLayout from "../layouts/GlobalLayout";
import { createTicket, getTicketsForUserId } from "../api/api";
import { useAuth } from "../providers/AuthProvider";
import { GetTicketsUserInterface, PostTicketInterface } from "../types/interaces";

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

    return (
        <GlobalLayout title="Home">
            <div className="flex flex-col">
                <form action="" className="flex flex-col" onSubmit={handleSubmit}>
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
                </form>

                <table className="mt-10 text-black">
                    <thead>
                        <tr>
                            <th>Ticket</th>
                            <th>Asunto</th>
                            <th>Prioridad</th>
                            <th>Área</th>
                            <th>Fecha de creación</th>
                            <th>Estado</th>
                            <th>Fecha de resolución</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ticketsFromConsult.map((ticket, key) => (
                            <tr key={key}>
                                <td>ID2983Y74</td>
                                <td>{ticket.subject}</td>
                                <td>{ticket.priority}</td>
                                <td>{ticket.department}</td>
                                <td>{ticket.creation_date}</td>
                                <td>{ticket.status}</td>
                                <td>{ticket.resolution_date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </GlobalLayout>
    );
}
