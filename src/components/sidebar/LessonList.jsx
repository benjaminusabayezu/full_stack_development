import LessonItem from "./LessonItem"
import { lessonData } from "../../data/lessonData";



const LessonList = ({
    lessons,
    activeLesson,
    setActiveLesson,
}) => {
  return (
    <div>
        <div className="p-5 border-b border-lime-800">
            <h3 className="font-semibold">
                Course COntent
            </h3>
        </div>
    {lessonData.map((lessaon)=>{
        return (
            <LessonItem key={lessaon.id}
            lesson={lessaon}
            active={lessaon.id === activeLesson.id}
            
            onClick={()=>  setActiveLesson(lessaon)}/>
        )
    })}
    </div>
  )
}

export default LessonList