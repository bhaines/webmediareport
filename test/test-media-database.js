"use strict"

const mocha = require ('mocha')
const expect = require('chai').expect
const db = require('../media-database')

describe('Media Database', (done)=>{
	it('Should set it\'s rate.', (done)=>{
		expect(db.SetErrorRate(10)).to.equal(10)
		done()
	})
})