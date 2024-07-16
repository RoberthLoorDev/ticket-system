import { useState } from "react";
import { useEffect } from "react";
import { getUserData } from "../api/api";
import { UserInterface } from "../types/interaces";

export function useUserData(userId: string, token: string) {
    const [infoUser, setinfoUser] = useState<UserInterface>();

    useEffect(() => {
        const getTickets = async () => {
            if (!userId || !token) return;
            const infoUser = await getUserData(userId, token);
            setinfoUser(infoUser);
        };
        getTickets();
    }, []);

    return { infoUser };
}
