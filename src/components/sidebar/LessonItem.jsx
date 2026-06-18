import { PlayCircle } from "lucide-react"



const LessonItem = ({
    lesson,
    active,
    onClick,
}) => {
  return (
    <div className={`w-full text-left p-4 border-b border-zinc-800 transition
        ${active ?"bg-zinc-900" : "hover:bg-zinc-900/50"}`}>
            <div className="flex gap-3">
                <PlayCircle className="w-3 h-3 mt-1"/>
                <div>
                    <h4 className="text-sm font-medium">
                        {lesson.title}

                    </h4>
                    <p className="text-xs text-lime-500 mt-1">
                        {lesson.duration}
                    </p>
                </div>

            </div>
            
            </div>
  )
}

export default LessonItem