const Donation = require('../models/Donation');
const mongoose = require('mongoose');

exports.getCampaignAnalytics = async (req, res) => {
  const { campaignId } = req.params;

  try {
    // Total amount donated
    const totalResult = await Donation.aggregate([
      { $match: { campaign: new mongoose.Types.ObjectId(campaignId) } },
      { $group: { _id: null, total: { $sum: "$amount" } } }
    ]);

    // Top contributors
    const topContributors = await Donation.aggregate([
      { $match: { campaign: new mongoose.Types.ObjectId(campaignId) } },
      { $group: { _id: "$donor", total: { $sum: "$amount" } } },
      { $sort: { total: -1 } },
      { $limit: 5 },
      {
        $lookup: {
          from: "users",
          localField: "_id",
          foreignField: "_id",
          as: "donor"
        }
      },
      { $unwind: "$donor" },
      { $project: { name: "$donor.name", total: 1 } }
    ]);

    // Donations over time (last 30 days)
    const timeSeries = await Donation.aggregate([
      { $match: { campaign: new mongoose.Types.ObjectId(campaignId) } },
      {
        $group: {
          _id: {
            year: { $year: "$createdAt" },
            month: { $month: "$createdAt" },
            day: { $dayOfMonth: "$createdAt" }
          },
          total: { $sum: "$amount" }
        }
      },
      { $sort: { "_id": 1 } }
    ]);

    res.json({
      totalRaised: totalResult[0]?.total || 0,
      topContributors,
      timeSeries
    });

  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
