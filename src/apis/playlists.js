const API_URL = "http://localhost:3004";

export const getPlaylists = () => {
  const urls = [`${API_URL}/playlists`, `${API_URL}/playlists-info`];
  const promises = urls.map((u) => fetch(u).then((r) => r.json()));
  return Promise.all(promises);
};
export const addPlaylist = async (data) => {
  const url = API_URL + "/playlists";
  const config = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(data),
  };
  const res = await fetch(url, config);
  return await res.json();
};
