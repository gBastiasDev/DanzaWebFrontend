import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

// Si necesitas enviar el token en headers
const setToken = (token: string) => {
  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

export const getUsers = async () => {
  const response = await api.get("/usuarios"); // ajusta la ruta según tu backend
  return response.data;
};

export const getUserById = async (id: string) => {
  const response = await api.get(`/usuarios/${id}`);
  return response.data;
};

export const setUserToken = setToken;

export default { getUsers, getUserById, setUserToken };
