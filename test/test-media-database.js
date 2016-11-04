"use strict"

const mocha = require ('mocha')
const expect = require('chai').expect
const db = require('../media-database')

describe('Media Database', (done)=>{
  it('Should set it\'s rate.', (done)=>{
    expect(db.SetErrorRate(10)).to.equal(10)
    done()
  })

  it('Should error at the correct rate.', (done) => {
    const testRate = 30
    const callCount = 10000
    const maxDiscrepancyPercent = 10

    expect(db.SetErrorRate(testRate)).to.equal(testRate)

    var errorCount = 0
    for (var i=0; i < callCount; i++) {
      if (db.ShouldReturnError()) {
        errorCount += 1
      }
    }

    var expected = Math.floor((testRate/100) * callCount)
    var difference = Math.abs(errorCount - expected)
    var differencePercent = (difference / callCount) * 100

    expect(differencePercent).to.be.below(maxDiscrepancyPercent)

    done()
  })
})