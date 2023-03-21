const format = { 
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'Europe/Zurich'
};
const dateFormat = new Intl.DateTimeFormat('en-GB', format);

module.exports = function dateFilter(value) {
    return dateFormat.format(new Date(value));
}
