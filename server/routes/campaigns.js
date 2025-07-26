const express = require('express');
const router = express.Router();
const {
  createCampaign,
  getAllCampaigns,
  getCampaignById,
  deleteCampaign
} = require('../controllers/campaignController');
const auth = require('../middleware/authMiddleware');

router.post('/', auth, createCampaign);
router.get('/', getAllCampaigns);
router.get('/:id', getCampaignById);
router.delete('/:id', auth, deleteCampaign);

module.exports = router;
