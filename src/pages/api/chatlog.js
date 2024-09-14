import axios from "axios";

const BASE_URL = "http://localhost:3001";

// Default to top ten users
export const uploadChatLogs = async (files, k = 10) => {
  const filesArr = Array.isArray(files) ? files : [files];
  const formData = new FormData();

  console.log(files);
  filesArr.forEach((file) => {
    formData.append("chatlog", file);
  });
  formData.append("k", k);

  try {
    const response = await axios.post(
      `${BASE_URL}/process-chat-logs`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error uploading chat logs:", error);
    throw error;
  }
};
