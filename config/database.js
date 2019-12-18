const mongoose = require('mongoose')
mongoose.set('useNewUrlParser', true)
mongoose.set('useUnifiedTopology', true)
module.exports = mongoose.connect('mongodb://localhost/db_finance')