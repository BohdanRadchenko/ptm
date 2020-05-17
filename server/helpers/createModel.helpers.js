const {handleFullWeekDate, handleWeekDate} = require(
    './dateParse.helpers')
const shortId = require('shortid')
const mongoose = require('mongoose')

const weekOptions = [
  {value: 0, label: 'Monday', short : 'Mon'},
  {value: 1, label: 'Tuesday', short : 'Tue'},
  {value: 2, label: 'Wednesday', short : 'Wed'},
  {value: 3, label: 'Thursday', short : 'Thu'},
  {value: 4, label: 'Friday', short : 'Fri'},
  {value: 5, label: 'Saturday', short : 'Sat'},
  {value: 6, label: 'Sunday', short : 'Sun'},
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

  static board(userId = '', list = []) {
    const access = new Array(userId)
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
      label: weekOptions.find(opt => opt.value === el.id).label,
      date: el.day,
      cards: [      {
        id: `cards-${el.id}0`,
        title: "cards 0",
        hour: '12',
        min: '00'
      },
        {
          id: `cards-${el.id}1`,
          title: "cards 1",
          hour: '12',
          min: '00'
        },
        {
          id: `cards-${el.id}2`,
          title: "cards 2",
          hour: '12',
          min: '00'
        },
        {
          id: `cards-${el.id}3`,
          title: "cards 3",
          hour: '12',
          min: '00'
        }],
    }
    lists.push(list)
  })
  return lists
}

module.exports = CreateModel