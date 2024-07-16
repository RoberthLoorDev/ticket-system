export const capitalizeFirstLetter = (word: string) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
};

export const refactorDate = (date: string) => {
    const months = [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre",
    ];

    const newDate = new Date(date);
    const day = newDate.getDate();
    const month = months[newDate.getMonth()];
    const year = newDate.getFullYear();

    return `${day} ${month}, ${year}`;
};

//find empty data when creating a ticket
export const checkEmptyFields = (obj: { [key: string]: any }): boolean => {
    for (const key in obj) {
        if (obj[key] === "" || obj[key] === null || obj[key] === undefined) {
            return true;
        }
    }
    return false;
};
