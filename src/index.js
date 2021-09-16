setAge('my-age', '27.06.1992')
document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.slider')
  var instances = M.Slider.init(elems, {
    indicators: false,
    interval: 4000,
    height: 500,
  })
})

function calcYearsAge(date) {
  date = date.split('.').reverse()
  date[1] -= 1

  const bornDate = getDateData(new Date(...date))
  const nowDate = getDateData(new Date())

  let years = nowDate.year - bornDate.year

  if (nowDate.month < bornDate.month) {
    years -= 1
  } else if (nowDate.month === bornDate.month && nowDate.date < bornDate.date) {
    years -= 1
  }

  return years
}

function getDateData(date) {
  return {
    year: date.getFullYear(),
    month: date.getMonth(),
    date: date.getDate(),
  }
}

function setAge(elId, dateStr) {
  const el = document.getElementById(elId)
  const age = calcYearsAge(dateStr)

  el.innerHTML = age
}
