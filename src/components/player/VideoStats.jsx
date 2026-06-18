import {Eye,ThumbsUp,Clock3} from 'lucide-react'
const VideoStats = ({
    views,
    likes,
    duration}) => {
  return (
    <div className='flex flex-wrap items-center gap-3 text-sm text-zinc-600'>
    <div className='flex items-center gap-2'>
        <Eye className='w-3 h-3'/>
        <span>{views}</span>
        </div> 

        <div className='flex items-center gap-2'>
            <ThumbsUp className='w-3 h-3'/>
            <span>{likes}</span>
            
            </div>   
            <div className='flex items-center gap-2'>
              <Clock3  className='w-3 h-3'/>
           <span>{duration}</span>
            </div>
    </div>
  )
}

export default VideoStats