import useUser from "../hooks/useUser";

const UsernameText = () => {
  const { username } = useUser();

  return <h1>Current User: {username}</h1>;
};

export default UsernameText;
