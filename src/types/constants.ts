export const apyTypesRequestLogin: { [key: number]: string } = {
    404: "Usuario no encontrado",
    401: "Contraseña incorrecta",
};

export type PriorityType = "alta" | "media" | "baja" | "urgente";

export type StatusTicketType = "nuevo" | "en_proceso" | "pendiente" | "resuelto";

//design of tickets
export const shadowPriorityPoint = {
    alta: { boxShadow: "0px 0px 5px 2px #FF1616", backgroundColor: "#FF1616" },
    media: { boxShadow: "0px 0px 5px 2px #FC0", backgroundColor: "#FC0" },
    baja: { boxShadow: "0px 0px 5px 2px #42BE65", backgroundColor: "#42BE65" },
    urgente: { boxShadow: "0px 0px 5px 2px #242424", backgroundColor: "#242424" },
};

export const tagsForStatusTicket = {
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
