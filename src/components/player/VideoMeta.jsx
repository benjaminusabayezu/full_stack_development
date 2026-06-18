import VideoStats from "./VideoStats"

const VideoMeta = ({
    title,
    category,
    instructor,
    views,
    likes,
    duration,
}) => {
  return (
    <div className="px-4 md:px-6 py-6 border-b border-zinc-800">
      <div className="flex items-center justify-between gap-3">
        <h1 className="text-xl md:text:2xl font-semibold mb-4">{title}</h1>

        <VideoStats views={views} likes={likes} duration={duration} />
      </div>

      <div className="mt-5 flex flex-wrap gap-2 text-sm ">
        <span className="text-zinc-500">Instructor:</span>
        <span className="text-yellow-500">{instructor} @{category}</span>
        <span className="text-lime-500">{category}</span>
      </div>
    </div>
  );
}

export default VideoMeta