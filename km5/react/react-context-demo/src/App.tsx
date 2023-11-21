import "./App.css";
import UsernameText from "./components/UsernameText";
import useUser from "./hooks/useUser";
import Navbar from "./components/Navbar";
import ApiUser from "./components/ApiUser";
import DoctorList from "./components/DoctorList";
import ActiveDoctorList from "./components/ActiveDoctorList";

function App() {
  const { isLoggedIn, loginUser, logoutUser } = useUser();

  return (
    <div>
      <Navbar />
      {isLoggedIn ? <h1>Logged in</h1> : <h1>Logged out</h1>}
      {isLoggedIn ? (
        <button onClick={() => logoutUser()}>logout</button>
      ) : (
        <button onClick={() => loginUser("Fayza")}>login user</button>
      )}
      <UsernameText />
      <ApiUser />
      <DoctorList />
      <ActiveDoctorList />
    </div>
  );
}

export default App;
