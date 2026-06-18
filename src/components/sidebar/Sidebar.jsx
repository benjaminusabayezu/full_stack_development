import InstructorCard from "./InstructorCard";
import CourseProgress from "./CourseProgress";
import LessonList from "./LessonList";
import HotPosts from "./HotPosts";

const Sidebar = ({
  lessons,
  activeLesson,
  setActiveLesson,
}) => {
  return (
    <div
      className="
        bg-[#0d0d0d]/600 shadow-2xl
        min-h-full
        p-4
      "
    >
      <InstructorCard />
      <CourseProgress />
      <LessonList  lessons={lessons}
      activeLesson={activeLesson}
      setActiveLesson={setActiveLesson}/>
      <HotPosts />
    </div>
  );
};

export default Sidebar;
