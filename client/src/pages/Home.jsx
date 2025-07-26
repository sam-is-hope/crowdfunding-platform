import { useEffect, useState } from 'react';
import axios from 'axios';
import CampaignCard from '../components/CampaignCard';

const Home = () => {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/campaigns`)
      .then(res => setCampaigns(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {campaigns.map(campaign => (
        <CampaignCard key={campaign._id} campaign={campaign} />
      ))}
    </div>
  );
};

export default Home;
