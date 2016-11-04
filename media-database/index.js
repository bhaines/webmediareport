"use strict"
var errorRate = .2

function returnError() {
  return Math.random() < errorRate
}

exports = function() {
  SetErrorRate = function (rate) {
    errorRate = rate
  }

  CDList = function(callback) {
    if (returnError()) {
      return callback(new Error("Failed generating CDList"))
    }

    callback(null, [
      "Madonna",
      "ACDC",
      "Katy Perry",
      "Beyonce"
    ])
  }

  MovieList = function(callback) {
    if (returnError()) {
      return callback(new Error("Failed generating CDList"))
    }
    callback(null, [
      "Saving Private Ryan",
      "Ghostbusters",
      "Avengers"
    ])
  }
}