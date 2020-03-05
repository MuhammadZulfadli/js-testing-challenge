function isLeapYear(tahun) {
    return tahun =  tahun % 4 === 0 && tahun % 100 !== 0 || tahun % 400 === 0 ? true : false
  }

  module.exports = isLeapYear;