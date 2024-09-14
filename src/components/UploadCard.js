import React, { useState } from "react";
import { useDropzone } from "react-dropzone";

const UploadCard = ({ processChatLogs }) => {
  const [files, setFiles] = useState([]);
  const [showWarning, setShowWarning] = useState(false);

  const handleFiles = (incomingFiles) => {
    const anyInvalid = incomingFiles.some((file) => file.type !== "text/plain");

    if (anyInvalid) {
      setShowWarning(true);
      return;
    }

    setFiles((prevFiles) => [...prevFiles, ...incomingFiles]);
    processChatLogs(files);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: handleFiles,
    accept: ".txt",
    multiple: true,
  });

  return (
    <div className="px-4">
      {/* Drag and drop zone */}
      <h3 className="mb-3">Chat Log Dropbox</h3>
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer ${
          isDragActive ? "border-blue-500 bg-blue-100" : "border-gray-300"
        }`}
      >
        <input {...getInputProps()} />

        <p className="text-blue-500 p-20">Drag and drop some files here</p>
      </div>

      <div className="relative">
        <input
          type="file"
          id="custom-file"
          className="opacity-0 absolute inset-0 w-full h-full cursor-pointer"
          multiple
          accept=".txt"
          onChange={processChatLogs}
        />
        <label
          htmlFor="custom-file"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 mt-3 rounded cursor-pointer"
        >
          Upload
        </label>

        {/* File List */}
        <ul className="list-disc pl-5">
          {files.map((file, index) => (
            <li key={index} className="text-gray-700">
              {file.name}
            </li>
          ))}
        </ul>

        {/* Toast to warn user if file format != .txt */}
        {showWarning && (
          <div
            className="fixed left-1/2 transform -translate-x-1/2 bottom-4 bg-red-100 border border-red-400 text-red-700 py-4 pl-4 pr-12 rounded text-sm"
            role="alert"
          >
            <span className="block sm:inline">
              Only .txt files are accepted. Please reupload the correct files.
            </span>
            <strong
              className="fixed font-bold text-red-500 right-4"
              onClick={() => setShowWarning(false)}
            >
              X
            </strong>
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadCard;
