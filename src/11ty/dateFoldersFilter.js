const yearFormat = new Intl.DateTimeFormat('en-GB', {year:'numeric'});
const monthFormat = new Intl.DateTimeFormat('en-GB', {month:'2-digit'});
const dayFormat = new Intl.DateTimeFormat('en-GB', {day:'2-digit'});

module.exports = function dateFoldersFilter(dateObj){
  // There's probably a simpler way...
  return `${yearFormat.format(dateObj)}/${monthFormat.format(dateObj)}/${dayFormat.format(dateObj)}`;
}

