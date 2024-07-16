import useTicketsByUser from "../../hooks/useTicketsByUser";
import { useAuth } from "../../providers/AuthProvider";
import {
    PriorityType,
    StatusTicketType,
    shadowPriorityPoint,
    tagsForStatusTicket,
} from "../../types/constants";
import { capitalizeFirstLetter, refactorDate } from "../../utils/utills";

export default function TicketTableComponent() {
    const { userId, token } = useAuth();
    if (!userId || !token) return;
    const { ticketsFromConsult } = useTicketsByUser(userId, token);

    const getShadowPriorityPoint = (priority: PriorityType) => {
        return shadowPriorityPoint[priority];
    };

    const getStatusForTicket = (status: string) => {
        const newStatus = status.replace(/ /g, "_") as StatusTicketType;

        return tagsForStatusTicket[newStatus];
    };

    return (
        <div className="overflow-x-auto py-2 min-w-full flex justify-center">
            <div className="overflow-y-auto max-h-[35rem] table-tickets-user-container">
                <table className="text-[#161C2C] w-full max-w-[100rem]" cellPadding={10}>
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
                            <tr key={key} className="h-12 hover:bg-slate-200 cursor-pointer duration-300">
                                <td className="px-7">{`TCKT${ticket.id}`}</td>

                                <td className="px-3 min-w-[12rem]">{ticket.subject}</td>

                                <td className="px-3 ">
                                    <div className="flex justify-center items-center gap-2">
                                        <div
                                            style={getShadowPriorityPoint(ticket.priority as PriorityType)}
                                            className="w-[8px] h-[8px] rounded-full"
                                        ></div>
                                        <span>{capitalizeFirstLetter(ticket.priority)}</span>
                                    </div>
                                </td>

                                <td className="px-3">{ticket.department}</td>

                                <td className="px-3 min-w-[8rem] ">{refactorDate(ticket.creation_date)}</td>

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
    );
}
