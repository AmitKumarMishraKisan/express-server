const express = require('express');
let app = express()

app.use(express.static(__dirname + '/build'))

app.get("/", (req, res) => {
    res.send("Hello World!!!");
})

app.listen(3000, () => {
    console.log('Listening at port 3000');
})