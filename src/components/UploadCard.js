import React, { useState } from "react";
import { useDropzone } from "react-dropzone";

const UploadCard = () => {
  const [files, setFiles] = useState([]);
  const [showWarning, setShowWarning] = useState(false);

  const onDrop = (acceptedFiles) => {
    const validFiles = acceptedFiles.filter(
      (file) => file.type === "text/plain"
    );

    // Still take in valid files instead of early exit / reject all
    setFiles((prevFiles) => [...prevFiles, ...validFiles]);

    // Give warning prompt for file with the wrong format
    if (acceptedFiles.length !== validFiles.length) {
      setShowWarning(true);
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: ".txt",
    multiple: true,
  });

  const handleUploads = (event) => {
    const uploadedFiles = Array.from(event.target.files);
    const validFiles = uploadedFiles.filter(
      (file) => file.type === "text/plain"
    );
    setFiles((prevFiles) => [...prevFiles, ...validFiles]);

    if (uploadedFiles.length !== validFiles.length) {
      setShowWarning(true);
    }
  };

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
          onChange={handleUploads}
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
            className="fixed bottom-4 right-4 bg-red-100 border border-red-400 text-red-700 p-4 rounded"
            role="alert"
          >
            <strong className="font-bold">Warning!</strong>
            <span className="block sm:inline">
              {" "}
              Some files were not accepted. Only .txt files are allowed.
            </span>
            <span
              className="absolute top-0 bottom-0 right-0 px-4 py-3"
              onClick={() => setShowWarning(false)}
            >
              <svg
                className="fill-current h-6 w-6 text-red-500"
                role="button"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <title>Close</title>
                <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
              </svg>
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadCard;
