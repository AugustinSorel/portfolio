import axios from "axios";

const uri =
  process.env.NODE_ENV === "development" ? "http://localhost:5000" : "";

const sendMessage = async () => {
  try {
    const res = await axios.post(`${uri}/api/email`, {
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
