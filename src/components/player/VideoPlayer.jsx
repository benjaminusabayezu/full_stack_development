
import { useState } from "react"
import VideoPlaceholder from "./VideoPlaceholder"

const VideoPlayer = ({videoUrl}) => {
 
    const  [loading,setLoading] =useState(false)
    if(!videoUrl){
        return <VideoPlaceholder />
    }

  return (
    <div className="relative w-full h-full">
        {loading &&(
            <div className="absolute inset-0 flex items-center justify-center gb-black z-10">
             Loading..
            </div>
        )}

        <video controls 
        className="w-full h-full object-cover" onLoadedData={()=>setLoading(false)}
        >
            <source src={videoUrl} type="video/mp4"/>
            
        </video>
    </div>
  )
}

export default VideoPlayer