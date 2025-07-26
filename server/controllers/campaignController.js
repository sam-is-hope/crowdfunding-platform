const Campaign = require('../models/Campaign');

exports.createCampaign = async (req, res) => {
  try {
    const campaign = await Campaign.create({ ...req.body, creator: req.user.id });
    res.status(201).json(campaign);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

exports.getAllCampaigns = async (req, res) => {
  try {
    const campaigns = await Campaign.find().populate('creator', 'name');
    res.json(campaigns);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

exports.getCampaignById = async (req, res) => {
  try {
    const campaign = await Campaign.findById(req.params.id).populate('creator', 'name');
    if (!campaign) return res.status(404).json({ msg: 'Campaign not found' });
    res.json(campaign);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

exports.deleteCampaign = async (req, res) => {
  try {
    const campaign = await Campaign.findById(req.params.id);
    if (!campaign) return res.status(404).json({ msg: 'Campaign not found' });
    if (campaign.creator.toString() !== req.user.id) return res.status(401).json({ msg: 'Unauthorized' });

    await campaign.deleteOne();
    res.json({ msg: 'Campaign deleted' });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
