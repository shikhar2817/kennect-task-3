export const addDate = (days: number = 0, weeks: number = 0, to: string) => {
    try {
        let date = new Date();
        if (to) date = new Date(to);

        if (Number.isNaN(date.getTime())) throw new Error("Invalid Input");

        let newDateinMiliseconds =
            date.getTime() +
            daysToMiliseconds(days) +
            weeksToMiliseconds(weeks);

        return new Date(newDateinMiliseconds);
    } catch (error: any) {
        console.log("Error", error);
        throw error;
    }
};

export const daysToMiliseconds = (days: number) => {
    return days * 24 * 60 * 60 * 1000;
};

export const weeksToMiliseconds = (weeks: number) => {
    return weeks * 7 * 24 * 60 * 60 * 1000;
};
