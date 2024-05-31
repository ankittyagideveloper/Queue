import { useState } from "react";

const CodeBlock = ({ code }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(code)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

  return (
    <div className="relative bg-[#f5f5f5] border border-[#ddd] rounded-md p-4 overflow-auto">
      <pre className="m-0 font-serif">{code}</pre>
      <button
        className="absolute top-2 right-2 bg-[#007bff] text-white border-none rounded-md px-1 py-3 pointer hover:bg-[#0056b3] focus:outline-none"
        onClick={handleCopy}
      >
        {copied ? "Copied!" : "Copy"}
      </button>
    </div>
  );
};

export default CodeBlock;
