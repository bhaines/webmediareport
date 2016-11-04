# Media Collection Reporting Tool

The Media Collection Reporting Tool (MCRT) implements a Restify HTTP server that returns a report of CDs and DVDs stored in a database. The format of the returned report is:
```text
CD List:
Madonna
ACDC
Katy Perry
Beyonce

Movie List:
Saving Private Ryan
Ghostbusters
Avengers
```

The server currently implements the routes:

### Halt:

```text
http://localhost:8080/halt
```
Halts the server

### Health check:

```text
http://localhost:8080/healthcheck
```
Returns 'OK' if the server's up and running.

# Resources

A database wrapper is provided at:
```text
./media-database
```

Supporting asynchronous methods returning CD and Movie lists with the functions:

```text
CDList(callback)
MovieList(callback)
```

Both methods will call the callback with the arguments err and array when complete. err will be null if no error was encountered. The list of media will be in the array upon success.

These calls will fail at a rate specified by the function:

```javascript
SetErrorRate(int) // some percentage value between 0 and 100
```

# Your Task

Implement a new module that is called by the server to generate the report. The new module must call the media-database module to retrieve the CD and Movie lists. The new module must format the report per that in the description above.

BONUS: Test your module using Mocha.

BONUS 2: Submit your work in the form of a pull request to this repository.
