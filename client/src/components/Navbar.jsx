import { Link } from 'react-router-dom';

const Navbar = () => {
  const token = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow">
      <Link to="/" className="text-xl font-bold">CrowdFundIt</Link>
      <div className="flex gap-4">
        <Link to="/create">Create Campaign</Link>
        {token ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
