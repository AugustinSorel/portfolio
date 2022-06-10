import axios from "axios";
import backendUri from "../utils/backendUri";

const sendMessage = (email: string, title: string, message: string) => {
  return axios.post(`${backendUri}/email`, {
    email,
    title,
    message,
  });
};

export default sendMessage;
