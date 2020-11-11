export const formatDate = (str) => {
    const date = new Date(str);
    const today = new Date();

    if (date.getDate() === today.getDate() && date.getMonth() === today.getMonth() 
        && date.getFullYear() === today.getFullYear()) {
            return `${('0'+date.getHours()).slice(-2)}:${('0'+date.getMinutes()).slice(-2)}`;
        }

    const msInDay = 24 * 60 * 60 * 1000;
    date.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);

    const daysAgo = (+today - +date)/msInDay;

    return daysAgo > 1 ? `${daysAgo} days ago` : 'Yesterday';
};