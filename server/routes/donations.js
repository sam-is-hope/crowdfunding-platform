const express = require('express');
const router = express.Router();
const { createDonation, getDonationsByCampaign } = require('../controllers/donationController');
const auth = require('../middleware/authMiddleware');

router.post('/', auth, createDonation);
router.get('/:campaignId', getDonationsByCampaign);

module.exports = router;
