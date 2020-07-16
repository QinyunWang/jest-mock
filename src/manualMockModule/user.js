import axios from "axios";
import { verifyPassword, verifyUsername } from "./verify";

function validate(username, password) {
  return verifyPassword(password) && verifyUsername(username);
}

function register(username, password) {
  if (!validate(username, password)) {
    return Promise.reject(new Error("Invalid username or password"));
  }
  return axios
    .post("/user", {
      username,
      password,
    })
    .then((response) => response.data);
}

export { validate, register };
