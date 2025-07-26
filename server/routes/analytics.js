const express = require('express');
const router = express.Router();
const { getCampaignAnalytics } = require('../controllers/analyticsController');

router.get('/:campaignId', getCampaignAnalytics);

module.exports = router;
