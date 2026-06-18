import Navbar from '../../../components/layout/Navbar'
import Sidebar from '../../../components/sidebar/Sidebar';
import CourseLayout from  '../../../layouts/CourseLayout'
import VideoSection from "../../../components/player/VideoSection";
import { lessonData } from '../../../data/lessonData';
import { useState } from 'react';

const CoursePlayerPage = () => {

  const [activeLesson,setActiveLesson] = useState(lessonData[0])
  return (
    <>
      <Navbar />
    <div className="bg-black text-white p-2">

      <CourseLayout sidebar={<Sidebar 
      lessons ={lessonData}
      activeLesson={activeLesson}
      setActiveLesson={setActiveLesson}
      />}>
        <VideoSection  lesson={activeLesson}/>
      </CourseLayout>
    </div>
    </>
  );
};

export default CoursePlayerPage;
