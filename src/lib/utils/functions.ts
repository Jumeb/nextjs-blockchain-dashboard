
export const getFirstDayOfSixMonthsBack = () => {
    const today = new Date();
    const sixMonthsAgo = new Date(today.getFullYear(), today.getMonth() - 6, 1);

    const year = sixMonthsAgo.getFullYear();
    const month = String(sixMonthsAgo.getMonth() + 1).padStart(2, '0');
    const day = '01';

    return `${year}-${month}-${day}`;
}


export const ThousandSeparator = (num = 0, type: string) => {
    var num_parts = Math.floor(num).toString().split('.');
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, type);
    return num_parts.join('.');
};