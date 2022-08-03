// import date-fns js library
const { format } = require("date-fns");

const formatDate = (date) => {
  const dateObject = new Date(date);

  return format(dateObject, "do MMMM yyyy");
};

module.exports = formatDate;
