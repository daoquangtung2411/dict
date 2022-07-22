const express = require('express')

const cors = require('cors')

const bodyParser = require('body-parser')

const CambDict = require('camb-dict')
const { urlencoded } = require('body-parser')

const dictionary = new CambDict.Dictionary()

const app = express()

app.use(cors())

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: true}))

app.get('/', (req, res) => {

    res.send('Server up and running')

})

app.post('/dict', (req, res) => {

    const { word } = req.body

    dictionary.meaning(word)
        .then(wordData => {

            const parsedData = JSON.parse(JSON.stringify(wordData))
            res.send(parsedData)

        })
        .catch(console.error)

})


app.listen('1111', () => {
    console.log('Server is running at port 1111')
})