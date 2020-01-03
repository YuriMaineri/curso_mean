const express = require('express')

module.exports = function(server) {

    // API Router
    const router = express.Router()
    server.use('/api', router)

    // rotas API
    const billingCyclesService = require('../api/billingCycle/billingCycleService')
    // chama a url base router e aplica a rota billing
    billingCyclesService.register(router, '/billingCycles')

    const billingSummaryService = require('../api/billingSummary/billingSummaryService')
    router.route('/billingSummary').get(billingSummaryService.getSummary)
}