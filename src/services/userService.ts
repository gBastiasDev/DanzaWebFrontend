import api, { setAuthToken } from "../api/axios";

// Si necesitas enviar el token en headers
const setToken = (token: string) => {
  setAuthToken(token);
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
