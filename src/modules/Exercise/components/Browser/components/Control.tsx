import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { FaRedo } from "react-icons/fa";
interface ControlProps {
  onSubmit: (input: string) => void;
  onReload: () => void;
}

const Control = ({ onSubmit, onReload }: ControlProps) => {
  const [inputValue, setInputValue] = useState<string>("https://wisesa.dev");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const value = event.target.value;
    if (value.startsWith("https://")) {
      setInputValue(value);
    } else {
      if (value.startsWith("https:/")) {
        setInputValue("https://");
      } else {
        setInputValue("https://" + value);
      }
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (inputValue.trim() !== "" && inputValue !== "https://") {
      //@todo: this will cause security issues, handle with care
      onSubmit(inputValue);
    }
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>
  ): void => {
    if (event.key === "Enter") {
      handleSubmit(event as any);
    }
  };

  return (
    <div className="bg-slate-100 rounded-t-md p-2 flex gap-2">
      <Button
        aria-label="reload browser"
        onClick={onReload}
        variant="outline"
        className="rounded-r-none bg-slate-100"
      >
        <FaRedo />
      </Button>
      <Input
        className="rounded-l-none"
        type="text"
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default Control;
