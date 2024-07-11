export const apyTypesRequestLogin: { [key: number]: string } = {
    404: "Usuario no encontrado",
    401: "Contraseña incorrecta",
};

export type PriorityType = "alta" | "media" | "baja" | "urgente";

export type StatusTicketType = "nuevo" | "en_proceso" | "pendiente" | "resuelto";
