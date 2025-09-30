import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

const setToken = (token: string) => {
  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

export const getDonations = async () => {
  const response = await api.get("/donations");
  return response.data;
};

export const createDonation = async (data: Donation) => {
  const response = await api.post("/donations", data);
  return response.data;
};

export const setDonationToken = setToken;

export default { getDonations, createDonation, setDonationToken };
