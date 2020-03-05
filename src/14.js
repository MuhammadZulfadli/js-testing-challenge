function isIsogram(isogram){
    return isogram.split("").every((c, i) => isogram.indexOf(c) == i);{
    }
  }

module.exports = isIsogram;