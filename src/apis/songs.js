const API_URL = "http://localhost:3004/";

export const getSongs = () => {
  const url = API_URL + "songs";
  return fetch(url).then((res) => res.json());
};
