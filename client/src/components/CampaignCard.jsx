import { Link } from 'react-router-dom';

const CampaignCard = ({ campaign }) => {
  return (
    <Link to={`/campaign/${campaign._id}`} className="block border rounded-xl shadow hover:shadow-lg transition p-4">
      <img src={campaign.image} alt={campaign.title} className="w-full h-48 object-cover rounded-md" />
      <h3 className="text-lg font-semibold mt-2">{campaign.title}</h3>
      <p className="text-sm text-gray-500 mb-1">Raised: ${campaign.currentAmount} / ${campaign.goalAmount}</p>
      <p className="text-sm">{campaign.description?.slice(0, 100)}...</p>
    </Link>
  );
};

export default CampaignCard;
