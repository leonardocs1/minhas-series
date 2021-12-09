const mongose = require('mongoose')

const SerieSchema = mongose.Schema({
  name: String,
  status: {
    type: String,
    enumValues: ['to-watch', 'watching', 'watched']
  },
  comments: [String]
})

const Serie = mongose.model('Serie', SerieSchema)

module.exports = Serie
