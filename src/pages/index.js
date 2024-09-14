import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import UploadCard from "@/components/UploadCard";
import ResultCard from "@/components/ResultCard";

import { uploadChatLogs } from "@/pages/api/chatlog";

export default function Main() {
  const [results, setResults] = useState(null);

  // API call
  const processChatLogs = async (incomingFiles) => {

    try {
      const data = await uploadChatLogs(incomingFiles, 10);
      setResults(data);
    } catch (error) {
      console.error("Failed to trigger API successfully: ", error);
    }
  };

  return (
    <div className="flex justify-between">
      <UploadCard processChatLogs={processChatLogs} />
      <ResultCard results={results} />
    </div>
  );
}
