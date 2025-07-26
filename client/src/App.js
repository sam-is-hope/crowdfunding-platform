import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CampaignDetails from './pages/CampaignDetails';
import CreateCampaign from './pages/CreateCampaign';
import Login from './pages/Login';
import Register from './pages/Register';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/campaign/:id" element={<CampaignDetails />} />
        <Route path="/create" element={<CreateCampaign />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
