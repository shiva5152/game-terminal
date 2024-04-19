
export const giveDate = (
    year: number,
    month: number,
    day: number,
    hour: number,
    minute: number,
    second: number,
    millisecond: number
) => {
    const date = new Date(Date.UTC(year, month - 1, day, hour, minute, second, millisecond));
    return date;
};