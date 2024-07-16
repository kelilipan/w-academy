import Main from "@/Layouts/Main";

import CourseCard from "./components/CourseCard";

const CourseListModule = () => {
  return (
    <Main className="flex flex-col container pt-8" withFooter>
      <h1 className="text-2xl font-bold">Courses</h1>
      <section id="courses" className="grid grid-cols-3 gap-4 mt-4">
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </section>
    </Main>
  );
};

export default CourseListModule;
