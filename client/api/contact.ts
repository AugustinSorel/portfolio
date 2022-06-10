import axios from "axios";

const uri =
  process.env.NEXT_PUBLIC_BACKEND_URI ||
  "http://localhost:5000/api/contact/new-message";

const sendMessage = async () => {
  try {
    const res = await axios.post(uri, {
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
