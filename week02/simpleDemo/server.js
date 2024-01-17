/* ******************************************
 * This is the application server
 * ******************************************/
const express = require("express")

const app = express()

/* ******************************************
 * Server host name and port
 * ***************************************** */
const HOST = 'localhost'
const PORT = 3000

/* ******************************************
 * Default GET route
 * ***************************************** */
app.use('/', require('./routes/index'));

/* ***********************
* Log statement to confirm server operation
* *********************** */
app.listen(PORT, () => {
console.log(`trial app listening on ${HOST}:${PORT}`)
})
