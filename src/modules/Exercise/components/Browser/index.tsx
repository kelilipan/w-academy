import React, { useState } from "react";
import Control from "./components/Control";

const Browser = () => {
  const [url, setURL] = useState("https://wisesa.dev/");
  const [randomKey, setKey] = useState(1);
  const handleSubmit = (input: string) => {
    setURL(input);
  };
  const handleReload = () => {
    setKey((prev) => prev + 1);
  };
  return (
    <div className="flex-1 rounded-md bg-white flex flex-col h-full">
      <Control onSubmit={handleSubmit} onReload={handleReload} />
      <iframe
        key={randomKey}
        className="w-full h-full border-0 rounded-b-md"
        //@todo: this will cause security issues, handle with care
        src={url}
        title="Wisesa Dev"
      ></iframe>
    </div>
  );
};

export default Browser;
