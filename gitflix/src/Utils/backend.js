import axios from "axios";
const backend = axios.create({ baseURL: "https://gitflix.onrender.com/api" });

export const fetchRepoInfo = async () => {
  const resp = await backend.post("/getinfo");
  const repoInfo = resp.data;
  return repoInfo;
};
