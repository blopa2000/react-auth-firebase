import { useAuth } from "../context/authContext";

function Home() {
  const { user, logout, loading } = useAuth();

  const handleLogout = async () => {
    await logout();
  };

  if (loading) return <h1>loading</h1>;

  return (
    <div>
      <h1>welcome {user?.displayName || user?.email}</h1>
      <button onClick={handleLogout}>exit</button>
    </div>
  );
}

export default Home;
