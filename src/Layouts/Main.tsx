import React from "react";
import Navbar from "@/components/Navbar";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });
interface MainProps extends React.PropsWithChildren<unknown> {
  className?: string;
  withFooter?: boolean;
}
const Main = ({ children, className, withFooter }: MainProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className={cn("flex-1 flex flex-col", inter.className, className)}>
        {children}
      </main>
      {withFooter && <Footer />}
    </div>
  );
};

export default Main;
