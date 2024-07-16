import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex justify-between p-4 border-b-2">
      <Image src="/vercel.svg" width={141} height={32} alt="Vercel's logo" />
      <Avatar className="w-8 h-8">
        <AvatarImage src="https://github.com/kelilipan.png" alt="@kelilipan" />
        <AvatarFallback>WI</AvatarFallback>
      </Avatar>
    </nav>
  );
};

export default Navbar;
