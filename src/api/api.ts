//log user

import { toast } from "react-toastify";
import { PostTicketInterface } from "../types/interaces";
import { checkEmptyFields } from "../utils/utills";

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
    const emptyData = checkEmptyFields(ticketData);

    if (emptyData) {
        toast.error("Error: No dejar campos vacíos");
        return;
    }

    toast.success("Ticket creado con éxito");

    try {
        const response = await fetch(`${urlAPI}/ticket/createTicket`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(ticketData),
        });
    } catch (error) {
        toast.error("Error al crear el ticket");
    }
};

//get user data
export const getUserData = async (idUser: string, token: string) => {
    try {
        const response = await fetch(`${urlAPI}/getUser/${idUser}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        });

        const responseApi = await response.json();

        const infoUser = responseApi.data[0];
        return infoUser;
    } catch (error) {
        console.log(error);
    }
};
