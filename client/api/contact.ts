import axios from "axios";
import EmailMessage from "../types/EmailMessage";
import backendUri from "../utils/backendUri";

const sendMessage = (emailMessage: EmailMessage) => {
  return axios.post(`${backendUri}/email`, emailMessage);
};

export default sendMessage;
