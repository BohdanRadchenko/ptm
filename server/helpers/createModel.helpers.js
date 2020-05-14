const {handleFullWeekDate, handleWeekDate} = require(
    './dateParse.helpers')
const shortId = require('shortid')
const mongoose = require('mongoose')

const weekOptions = [
  {value: 0, label: 'Mon'},
  {value: 1, label: 'Tue'},
  {value: 2, label: 'Wed'},
  {value: 3, label: 'Thu'},
  {value: 4, label: 'Fri'},
  {value: 5, label: 'Sat'},
  {value: 6, label: 'Sun'},
];

//mongoose.Types.ObjectId("5c17505032389130da703ab0")
//Task.
// findById("5c17538f570dc7339c732b3b").
// populate('user').
// exec(function (err, docs) {
//     console.log(docs);
// });

class CreateModel {
  static list(startDay = 0, startMonth = 0) {
    if (!startDay || !startMonth) {
      console.log('ERROR: Empty props CreateModel.list')
      console.log(' - line: 24 - createModel.helpers.js')
      return null
    }
    const day = handleWeekDate(startDay, startMonth)
    const week = handleFullWeekDate(startDay, startMonth)
    const lists = createLists(week)
    return {
      dateStart: day.start,
      dateEnd: day.end,
      lists: lists,
      notification: []
    }
  }

  // static board(startDay = 0, startMonth = 0 ) {
  static board(userId, list) {
    // if (!startDay || !startMonth) {
    //   console.log('ERROR: Empty props CreateModel.list')
    //   console.log(' - line: 24 - createModel.helpers.js')
    //   return null
    // }

    const access = new Array(mongoose.Types.ObjectId(userId))

    return {
      dateStart: list.dateStart,
      dateEnd: list.dateEnd,
      list: mongoose.Types.ObjectId(list._id),
      author: mongoose.Types.ObjectId(userId),
      access: access,
    }
  }
}

const createLists = (week) => {
  const lists = []
  week.map(el => {
    const list = {
      id: `list-${el.id}`,
      title: weekOptions.find(opt => opt.value === el.id).label,
      date: el.day,
      cards: [],
    }
    lists.push(list)
  })
  return lists
}

module.exports = CreateModel