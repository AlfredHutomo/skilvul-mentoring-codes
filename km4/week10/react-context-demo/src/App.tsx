import "./App.css";
import UsernameText from "./components/UsernameText";
import useUser from "./hooks/useUser";
import Navbar from "./components/Navbar";
import ApiUser from "./components/ApiUser";

function App() {
  const { isLoggedIn, loginUser, logoutUser } = useUser();

  return (
    <div>
      <Navbar />
      {isLoggedIn ? <h1>Logged in</h1> : <h1>Logged out</h1>}
      {isLoggedIn ? (
        <button onClick={() => logoutUser()}>logout</button>
      ) : (
        <button onClick={() => loginUser("Hatami")}>login user</button>
      )}
      <UsernameText />
      <ApiUser />
    </div>
  );
}

export default App;
