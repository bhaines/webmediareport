"use strict"

var errorRate = 20

module.exports = {
  ShouldReturnError: function() {
    return Math.floor(Math.random() * 100) < errorRate
  },

  SetErrorRate: function (rate) {
    errorRate = rate
    return errorRate
  },

  CDList: function(callback) {
    setTimeout((callback)=>{
      if (this.ShouldReturnError()) {
        return callback(new Error("Failed generating CDList"))
      }

      callback(null, [
        "Madonna",
        "ACDC",
        "Katy Perry",
        "Beyonce"
      ])
    }, 500, callback)
  },

  MovieList: function(callback) {
    setTimeout((callback)=>{
       if (this.ShouldReturnError()) {
        return callback(new Error("Failed generating CDList"))
      }
      callback(null, [
        "Saving Private Ryan",
        "Ghostbusters",
        "Avengers"
      ])
    }, 1000, callback)
  }
}