function getDateName(date) {
    const options = { weekday: "long", };
    let dayName = new Date(date).toLocaleString('en-US', options);
    return dayName
}

function getDayAndMonth(date) {
    const options = {
        day: "numeric",
        month: "long",
    };
    let dayAndMonth = new Date(date).toLocaleString('en-US', options);
    return dayAndMonth
}

export { getDateName, getDayAndMonth }
