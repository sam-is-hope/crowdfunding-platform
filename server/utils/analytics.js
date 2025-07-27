const getTopContributors = (donations) => {
  const totals = {};

  donations.forEach(donation => {
    const donorId = donation.donor._id;
    if (!totals[donorId]) {
      totals[donorId] = { name: donation.donor.name, total: 0 };
    }
    totals[donorId].total += donation.amount;
  });

  const sorted = Object.values(totals).sort((a, b) => b.total - a.total);
  return sorted.slice(0, 5);
};

module.exports = {
  getTopContributors
};
