import axios from "axios";
import backendUri from "../utils/backendUri";

const sendMessage = async () => {
  try {
    const res = await axios.post(`${backendUri}/email`, {
      name: "John Doe",
      email: "",
      message: "This is a test message",
    });

    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

export default sendMessage;
