import React from "react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <div className="rounded-b-md border-t-2 p-4 w-full bg-slate-100 mt-auto sticky bottom-0 flex justify-end">
      <div className="flex gap-2">
        <Button variant="ghost">Previous</Button>
        <Button>Next</Button>
      </div>
    </div>
  );
};

export default Navigation;
