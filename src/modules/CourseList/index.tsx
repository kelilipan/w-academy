import Main from "@/Layouts/Main";

import CourseCard from "./components/CourseCard";

const CourseListModule = () => {
  return (
    <Main className="flex flex-col container" withFooter>
      <h1 className="2xl font-bold">Courses</h1>
      <section id="courses" className="grid grid-cols-3">
        <CourseCard />
      </section>
    </Main>
  );
};

export default CourseListModule;
