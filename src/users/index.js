import axios from "axios";
import "@babel/polyfill";

export default async function getUsers(id) {
  const response = await axios.get(`http://localhost:8080/users/${id}`);
  return response.data;
}
