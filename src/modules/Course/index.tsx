import React from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import Main from "@/Layouts/Main";

// @todo: use skeleton loader
const IDE = dynamic(() => import("./components/IDE"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});
const Browser = dynamic(() => import("./components/Browser"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});
const CustomTerminal = dynamic(() => import("./components/Terminal"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});
const Details = dynamic(() => import("./components/Details"), {
  loading: () => <p>Loading...</p>,
});

const CourseModule = () => {
  //@todo: use params data
  const router = useRouter();
  console.log(router.query.id);
  return (
    <Main className="flex flex-col">
      <div className="grid grid-cols-3 p-4 gap-2 bg-slate-200 flex-1">
        <Details />
        <div className="flex flex-col flex-1 gap-2">
          <div className="h-[70%]">
            <IDE />
          </div>
          <div className="h-[30%]">
            <CustomTerminal />
          </div>
        </div>
        <Browser />
      </div>
    </Main>
  );
};

export default CourseModule;
