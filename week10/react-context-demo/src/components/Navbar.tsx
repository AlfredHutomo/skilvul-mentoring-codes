import UsernameText from "./UsernameText";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <h1>My Blog</h1>
        <a href="/">Home</a>
        <a href="/create">New Blog</a>
      </div>
      <UsernameText />
    </div>
  );
};

export default Navbar;
