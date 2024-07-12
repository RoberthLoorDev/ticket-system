export interface PostTicketInterface {
    user_id: number;
    subject: string;
    description: string;
    priority: string;
    department: string;
    status: "nuevo";
}

export interface GetTicketsUserInterface {
    creation_date: string;
    department: string;
    description: string;
    due_date: string | "Por definir";
    name: string;
    priority: string;
    resolution_date: string | null;
    status: string | null;
    subject: string;
    technician_name: string | null;
}

export interface UserInterface {
    id: number;
    name: string;
    email: string;
    rol_name: string;
}
