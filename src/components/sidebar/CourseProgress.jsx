

const CourseProgress = () => {
    const progress=65;
  return (
    <div className="p-5 border-b border-zinc-800">
        <div className="flex justify-between mb-3">
            <span>Course Progress</span>
            <span>{progress}</span>
        </div>
        <div className="h-2 bg-zinc-800 rounded-full">
            <div className="h-full rounded-full bg-yellow-500"
            style={{width:`${progress}%`}}
            >

            </div>

        </div>
    </div>
  )
}

export default CourseProgress