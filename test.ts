const getFirstDayOfSixMonthsBack = () => {
    const today = new Date();
    const sixMonthsAgo = new Date(today.getFullYear(), today.getMonth() - 6, 1);
    
    const year = sixMonthsAgo.getFullYear();
    const month = String(sixMonthsAgo.getMonth() + 1).padStart(2, '0');
    const day = '01';

    return `${year}-${month}-${day}`;
}

console.log(getFirstDayOfSixMonthsBack());
