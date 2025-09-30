import api, { setAuthToken } from "../api/axios";

interface LoginData {
  email: string;
  password: string;
}

export const login = async (data: LoginData) => {
  try {
    const response = await api.post("/auth/login", data);
    const { token, user } = response.data;

    localStorage.setItem("token", token);
    setAuthToken(token);
    return user;
  } catch (error) {
    localStorage.removeItem("token");
    setAuthToken(null);
    throw error;
  }
};

export const logout = () => {
  localStorage.removeItem("token");
  setAuthToken(null);
};
