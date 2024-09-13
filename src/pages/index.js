import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import UploadCard from "@/components/UploadCard";
import ResultCard from "@/components/ResultCard";

export default function Main() {
  return (
    <div className="flex justify-between">
      <UploadCard />
      <ResultCard />
    </div>
  );
}
