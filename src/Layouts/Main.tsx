import React from "react";
import Navbar from "@/components/Navbar";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });
interface MainProps extends React.PropsWithChildren<unknown> {
  className?: string;
}
const Main = ({ children, className }: MainProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className={cn("flex-1 flex flex-col", inter.className, className)}>
        {children}
      </main>
    </div>
  );
};

export default Main;
