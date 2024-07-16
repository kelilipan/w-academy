import React from "react";
import { FaBars } from "react-icons/fa";

const Header = () => {
  return (
    <div className="rounded-t-md border-b-2 p-4 w-full flex justify-between">
      <FaBars />
      <span className="text-slate-600 text-sm">0/1 Steps</span>
    </div>
  );
};

export default Header;
