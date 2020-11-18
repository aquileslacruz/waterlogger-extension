export const formatDate = (str) => {
    const date = new Date(str);
    const today = new Date();

    if (date.getDate() === today.getDate() && date.getMonth() === today.getMonth() 
        && date.getFullYear() === today.getFullYear()) {
            return `${zeroFill(date.getHours(), 2)}:${zeroFill(date.getMinutes(), 2)}`;
        }

    const msInDay = 24 * 60 * 60 * 1000;
    date.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);

    const daysAgo = (+today - +date)/msInDay;

    return daysAgo > 1 ? `${daysAgo} days ago` : 'Yesterday';
};

export const formatTime = (date) => {
    const hours = zeroFill(date.getHours(), 2);
    const minutes = zeroFill(date.getMinutes(), 2);
    const seconds = zeroFill(date.getSeconds(), 2);

    return `${hours}:${minutes}:${seconds}`;
}

const zeroFill = (value, count) => `${('0'+value).slice(-count)}`;