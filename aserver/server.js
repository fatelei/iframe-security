const path = require('path')

const express = require('express')
const app = express()

app.use('/static', express.static(path.join(__dirname, 'static')))
app.set('view engine', 'pug')

app.get('/', (req, res) => {
    res.render('index', {title: 'Iframe referrer policy', message: 'Iframe referrer policy'})
})

app.get('/a', (req, res) => {
    res.render('a', {title: 'Iframe no-referrer policy', message: 'no-referrer policy'})
})

app.get('/b', (req, res) => {
    res.render('b', {title: 'Iframe origin policy', message: 'origin policy'})
})

app.get('/c', (req, res) => {
    res.render('c', {title: 'Iframe origin-when-cross-origin policy', message: 'origin-when-cross-origin policy'})
})

app.get('/d', (req, res) => {
    res.render('d', {title: 'Iframe unsafe-url policy', message: 'unsafe-url policy'})
})

app.get('/e', (req, res) => {
    res.render('e', {title: 'Iframe no-referrer-when-downgrade policy', message: 'no-referrer-when-downgrade policy'})
})

app.listen(3001, '0.0.0.0')
