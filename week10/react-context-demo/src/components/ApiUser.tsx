import useUser from "../hooks/useUser";

const ApiUser = () => {
  const { apiUser } = useUser();

  return <h1>Api User: {apiUser}</h1>;
};

export default ApiUser;
