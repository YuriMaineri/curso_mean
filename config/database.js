const mongoose = require('mongoose')
mongoose.set('useNewUrlParser', true)
mongoose.set('useUnifiedTopology', true)
module.exports = mongoose.connect('mongodb://localhost:27017/db_finance')

mongoose.Error.messages.general.required = "O atributo '{PATH} é obrigatório."
mongoose.Error.messages.Number.min = "O '{VALUE}' informado é menor que o mínimo de '{MIN}'"
mongoose.Error.messages.Number.max = "O '{VALUE}' informado é maior que o máximo de '{MAX}'"
//mongoose.Error.messages.String.enum 