
// Человеческий вид!
// new Date(date) - .toLocaleDateString() - XXXX-X-XX
// 1589144400000 - .toLocaleDateString() - 2020-5-11

const handleWeekDate = (startDay, startMonth) => {
  const year = new Date().getFullYear()
  const start = new Date(year, startMonth, startDay).getTime()
  const end = new Date(year, startMonth, startDay + 6).getTime()
  return {start, end}
}

const handleFullWeekDate = (startDay, startMonth) => {
  const year = new Date().getFullYear()
  const weekList = []
  for (let i = 0; i <= 6; i++) {
    const weekDay = {id : i, day : new Date(year, startMonth, startDay + i).getTime()}
    weekList.push(weekDay)
  }
  return weekList
}

module.exports = {handleWeekDate, handleFullWeekDate}