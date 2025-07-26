const Donation = require('../models/Donation');
const Campaign = require('../models/Campaign');
const stripe = require('stripe')(process.env.STRIPE_SECRET);

exports.createDonation = async (req, res) => {
  const { campaignId, amount, message, paymentMethodId } = req.body;

  try {
    // Create Stripe payment
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100), // Stripe uses cents
      currency: 'usd',
      payment_method: paymentMethodId,
      confirm: true
    });

    // Save donation to DB
    const donation = await Donation.create({
      donor: req.user.id,
      campaign: campaignId,
      amount,
      message,
      paymentIntentId: paymentIntent.id
    });

    // Update campaign amount
    await Campaign.findByIdAndUpdate(campaignId, {
      $inc: { currentAmount: amount }
    });

    res.status(201).json(donation);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

exports.getDonationsByCampaign = async (req, res) => {
  try {
    const donations = await Donation.find({ campaign: req.params.campaignId })
      .populate('donor', 'name')
      .sort({ createdAt: -1 });
    res.json(donations);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
