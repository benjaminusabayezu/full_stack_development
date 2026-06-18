import {Mail} from  'lucide-react';
import { instructorData } from '../../data/instructorData';

const InstructorCard = () => {
  return (
    <div className='p-5 border-b border-zinc-800'>
        <div className='flex items-center gap-4'>
            <img src={instructorData.avatar} alt="Instructor" 
            className='w-14 h-14 rounded-full object-cover'
            />
            <div>
                <h3 className='font-semibold'>
                    {instructorData.name}
                </h3>
                <p className='text-sm text-yellow-500'>
                    {instructorData.role}

                </p>
            </div>

        </div>
        <button className='mt-4 w-full py-1 md:py-2 rounded-lg bg-lime-500 hover:bg-lime-600 cursor-pointer transition
        flex items-center justify-center gap-2'>
            <Mail className='w-3 h-3'/>
            <span className='text-sm tracking-widest'>{instructorData.email}</span>
        </button>
    </div>
  )
}

export default InstructorCard