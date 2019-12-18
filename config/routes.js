const express = require('express')

module.exports = function(server) {

    // API Router
    const router = express.Router()
    server.use('/api', router)

    // rotas API
    const billingCyclesService = require('../api/billingCycle/billingCycleService')
    
}