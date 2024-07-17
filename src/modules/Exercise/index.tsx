import dynamic from "next/dynamic";
import { useRouter } from "next/router";

import Main from "@/Layouts/Main";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import Meta from "@/components/Meta";

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

const ExerciseModule = () => {
  //@todo: use params data
  const router = useRouter();
  console.log(router.query.exerciseSlug, router.query.courseSlug);

  return (
    <Main className="flex flex-col">
      <Meta pageName={router.query.courseSlug?.toString() + " exercise"} />

      <ResizablePanelGroup
        direction="horizontal"
        className="flex-1 p-4 gap-2 bg-slate-200"
      >
        <ResizablePanel minSize={30}>
          <Details />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel minSize={30}>
          <div className="flex flex-col flex-1 gap-2 h-full">
            <div className="h-[70%]">
              <IDE />
            </div>
            <div className="h-[30%]">
              <CustomTerminal />
            </div>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel minSize={30}>
          <Browser />
        </ResizablePanel>
      </ResizablePanelGroup>
    </Main>
  );
};

export default ExerciseModule;
