"use strict"

const db = require('./media-database')

module.exports = {

	getReport: function(callback) {

		var report = ''

		db.SetErrorRate(0);

		db.CDList( function writeCdList(err,list) {

			report += 'CD List:\r\n'

			if (err) {
				report += 'error - ' + err + '\r\n'
			} else {
				list.forEach( function(cd) {
					report += cd + '\r\n'
				})
			}

			db.MovieList( function writeMovieList(err,list) {
				report += '\r\nMovie List:\r\n'

				if (err) {
					report += 'error - ' + err + '\r\n'
				} else {
					list.forEach( function(movie) {
						report += movie + '\r\n'
					})
				}

				callback(report);
			})
		});
	}
}