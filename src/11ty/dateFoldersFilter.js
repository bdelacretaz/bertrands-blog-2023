const { DateTime } = require("luxon");

module.exports = function dateFoldersFilter(dateObj){
  return DateTime.fromJSDate(dateObj, {
    zone: 'utc'
  }).toFormat("yyyy/MM/dd");
}

