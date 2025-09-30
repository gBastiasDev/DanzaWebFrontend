import api, { setAuthToken } from "../api/axios";



const setToken = (token: string | null) => {
  setAuthToken(token);
};

export const getDonations = async () => {
  const response = await api.get("/donations");

  if (response.status !== 200) {
    setToken(null);
  }

  return response.data;
};

export const getDonation = async (transactionId: string) => {
  const response = await api.get(`/donations/${transactionId}`);
  return response.data;
};

export const createDonation = async (data: Donation) => {
  const response = await api.post("/donations", data);
  return response.data;
};

export const createFlowDonation = async (data: Donation) => {
  const response = await api.post("/donations/flow", data);
  return response.data;
};

export const setDonationToken = setToken;

export default { getDonations, getDonation, createDonation, createFlowDonation, setDonationToken };
