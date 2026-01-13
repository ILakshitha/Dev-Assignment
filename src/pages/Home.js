import { useLocation, useNavigate } from "react-router-dom";

function Home() {
  const location = useLocation();
  const navigate = useNavigate();

  const username = location.state?.username;

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>Home</h2>

      <h3>Welcome {username}</h3>

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Home;
