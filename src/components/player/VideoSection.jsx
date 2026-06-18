
import VideoPlayer from "./VideoPlayer"
import VideoMeta from './VideoMeta'
import CourseTabs from "./CourseTabs";
import { courseData } from "../../data/courseData";
const VideoSection = () => {



  return (
    <>
    <div className="aspect-video bg-black">
      <VideoPlayer videoUrl={courseData.video}/>

    </div>
    <VideoMeta 
    title={courseData.title}
    instructor={courseData.instructor}
    category={courseData.category}
    views={courseData.views}
    likes={courseData.likes}
    duration={courseData.duration}
    />

    <CourseTabs/>

    </>
  )
}

export default VideoSection