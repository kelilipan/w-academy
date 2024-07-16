import Main from "@/Layouts/Main";
import React from "react";
import Header from "./components/Header";
import Syllabus from "./components/Syllabus";

const CourseDetailModule = () => {
  return (
    <Main className="flex flex-col container pt-4" withFooter>
      <Header />
      <Syllabus />
    </Main>
  );
};

export default CourseDetailModule;
