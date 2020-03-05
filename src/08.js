function arrayMirroring(x) {
    let a = [...x]
    let b = x.reverse()
    return a.concat(b)
  }

  module.exports = arrayMirroring;