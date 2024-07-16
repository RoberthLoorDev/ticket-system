import { useEffect, useState } from "react";
import { getTicketsForUserId } from "../api/api";
import { GetTicketsUserInterface } from "../types/interaces";

export default function useTicketsByUser(userId: string, token: string) {
    const [ticketsFromConsult, setTicketsFromConsult] = useState<GetTicketsUserInterface[]>([]);

    useEffect(() => {
        const getTicketsForTable = async () => {
            if (!token || !userId) return;
            const { ticketsForUser } = await getTicketsForUserId(token, userId);
            setTicketsFromConsult(ticketsForUser);
        };

        getTicketsForTable();
    }, []);

    return { ticketsFromConsult };
}
