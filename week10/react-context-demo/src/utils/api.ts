export const getRandomUser = () =>
  fetch("https://randomuser.me/api/").then((response) => response.json());
