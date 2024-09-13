import { useState } from "react";
import UploadCard from "@/components/UploadCard";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Main() {
  return (
    <div className="flex justify-between">
      <UploadCard />
      <ResultCard />
    </div>
  );
}
