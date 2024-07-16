import React from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

import {
  FaBook,
  FaCertificate,
  FaLightbulb,
  FaPuzzlePiece,
} from "react-icons/fa";
import { useRouter } from "next/router";
const Header = () => {
  const router = useRouter();
  const perks = [
    { text: "Earn a certificate of completion", icon: <FaCertificate /> },
    { text: "12 Projects", icon: <FaPuzzlePiece /> },
    { text: "11 Lessons", icon: <FaBook /> },
    { text: "Beginner friendly", icon: <FaLightbulb /> },
  ];
  return (
    <section id="course-detail" className="grid grid-cols-[2fr_1fr] gap-8">
      <div id="header-detail" className="mt-12">
        <h1 className="text-6xl font-bold">
          Learn <span className="capitalize">{router.query.courseSlug}</span>
        </h1>
        <div className="flex gap-4 mt-6">
          <Button asChild>
            <Link href="/course/javascript/exercise/hello-world">
              Resume Course
            </Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/course/javascript/exercise/hello-world">
              Start a practice session
            </Link>
          </Button>
        </div>
        <p className="mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio tempore
          dolorum veritatis, dignissimos cum excepturi beatae dolorem soluta
          labore numquam ratione qui praesentium, delectus temporibus porro id
          quas sunt magnam.
        </p>
        <h4 className="mt-4 font-semibold text-lg">Your progress:</h4>
        <div className="flex gap-2 items-center">
          <Progress className="h-4" value={33} />
          <span>33%</span>
        </div>
      </div>
      <div id="perks">
        {perks.map((item, idx) => (
          <div
            className="flex items-center gap-2 border-b-2 p-4"
            key={`perks-${idx}`}
          >
            {item.icon} <span>{item.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Header;
