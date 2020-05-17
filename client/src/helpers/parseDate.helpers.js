export const localDateParse = (date) => {
  if(!date) return null
  const day = new Date(date).getDate()
  const month = new Date(date).getMonth()
  return {
    day: day < 10 ? `0${day}` : day,
    month: month < 10 ? `0${month}` : month,
    year: new Date(date).getFullYear(),
  }
}