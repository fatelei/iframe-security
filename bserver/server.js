const path = require('path')

const express = require('express')
const app = express()

app.use('/static', express.static(path.join(__dirname, 'static')))
app.set('view engine', 'pug')

app.use('/', (req, res) => {
    res.render('index', {title: 'b', message: 'Display referrer below'})
})

app.listen(80, '0.0.0.0')