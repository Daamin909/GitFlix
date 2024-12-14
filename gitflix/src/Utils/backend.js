import axios from "axios";
const backend = axios.create({ baseURL: "http://127.0.0.1:5000/api" });

export const fetchRepoInfo = async () => {
  const resp = await backend.post("/getinfo");
  const repoInfo = resp.data;
  return repoInfo;
};
