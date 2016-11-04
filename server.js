"use strict"

var os = require('os')
var winston = require('winston')
var restify = require('restify')

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
  console.log ()
}

function mainPrime() {

  var server = restify.createServer()
  var port = 8080

  server.get('/', function (req, res, next) {
    res.send("OK")
    return next()
  })

  server.get('/healthcheck', function (req, res, next) {
    res.send('OK')
    return next()
  })

  server.get('/halt', function (req, res, next) {
    res.send('halting')
    logger.info('Halting the server.')
    process.exit(0)
  })

  server.listen(port, function() {
    logger.debug("Worker Worker server running.")
  })
}

main();