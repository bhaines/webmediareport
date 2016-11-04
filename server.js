"use strict"

var winston = require('winston')
var restify = require('restify')
var db = require('./media-database')

var hostname = os.hostname()

var logger = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)({
      timestamp: function() {
        var d = new Date()
        return d.toISOString()
      },
      formatter: function(options) {
        // Return string will be passed to logger.
        return options.timestamp() +' '+ options.level.toUpperCase() +' '+ (undefined !== options.message ? options.message : '') +
          (options.meta && Object.keys(options.meta).length ? '\n\t'+ JSON.stringify(options.meta) : '' )
      }
    })
  ]
})

logger.level = 'debug'

function main() {

  var server = restify.createServer()
  var port = 8080

  server.get('/healthcheck', function (req, res, next) {
    logger.info('Health check.')
    res.send('OK')
    return next()
  })

  server.get('/halt', function (req, res, next) {
    logger.info('Halting the server.')
    res.send('halting')
    process.exit(0)
  })

  server.listen(port, function() {
    logger.info("Worker Worker server running.")
  })
}

main()
