//log user

import { PostTicketInterface } from "../types/interaces";

const urlAPI = "http://localhost:3000/api/v1";

export const loginUserApi = async (email: string, password: string) => {
    try {
        const response = await fetch("http://localhost:3000/api/v1/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        });

        return { response };
    } catch (error) {
        throw new Error("Error del sevidor");
    }
};

//get tickets created for users
export const getTicketsForUserId = async (token: string, userId: string) => {
    try {
        const response = await fetch(`${urlAPI}/ticket/getTicket/${userId}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        });

        const responseAPI = await response.json();
        const ticketsForUser = responseAPI.data;

        return { ticketsForUser };
    } catch (error) {
        console.error(error);
        throw new Error("Error de servidor");
    }
};

//create a ticket
export const createTicket = async (ticketData: PostTicketInterface, token: string) => {
    try {
        const response = await fetch(`${urlAPI}/ticket/createTicket`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(ticketData),
        });

        console.log(await response.json());
    } catch (error) {
        console.error(error);
    }
};
