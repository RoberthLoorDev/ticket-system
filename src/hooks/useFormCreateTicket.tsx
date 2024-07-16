import React, { useState } from "react";
import { PostTicketInterface } from "../types/interaces";
import { createTicket } from "../api/api";

export function useFormCreateTicket(userId: string, token: string) {
    const [formCreateTicket, setFormCreateTicket] = useState<PostTicketInterface>({
        user_id: Number(userId),
        subject: "",
        description: "",
        priority: "baja",
        department: "",
        status: "nuevo",
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!token) return;
        createTicket(formCreateTicket, token);
    };

    const handleChangeForm = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;

        setFormCreateTicket((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    return { handleChangeForm, handleSubmit };
}
