import React from 'react'
import { FcLike,FcLikePlaceholder } from "react-icons/fc";
import { toast } from 'react-toastify'
export default function Card(props) {
  const course = props.course
  const likedCourses = props.likedCourses || []
  const setLikedCourses = props.setLikedCourses

  function clickHandler() {
    if (likedCourses.includes(course.id)) {
      // When unliking, make sure to return a new array without mutating the original state
      setLikedCourses((prevLikedCourses) => {
        return prevLikedCourses.filter((cid) => cid !== course.id);
      });
      toast.warning("Like Removed");
    } else {
      // When liking, ensure that we append the new course id to the previous array
      setLikedCourses((prevLikedCourses) => {
        return [...prevLikedCourses, course.id];
      });
      toast.success("Like Added Successfully");
    }
  }
  return (
    <div className=' bg-opacity-80 w-[300px] rounded-md overflow-hidden dark:bg-slate-800 '>
      <div className='relative '>
        <img src={props.course.image.url} alt={props.course.image.alt} />
     
      <div className='rounded-full w-[40px] h-[40px] bg-white absolute right-2 bottom-[-12px] grid place-items-center'>
          <button onClick={clickHandler}>
          {
                            !likedCourses.includes(props.course.id) ? <FcLikePlaceholder fontSize="1.75rem" /> : <FcLike fontSize="1.75rem" />
                        }

          </button>
      </div>
      </div>

      <div className='p-4'>

        <p className='text-white text-lg font-semibold leading-6'>{props.course.title}</p>
        <p className='mt-2 text-white'>{props.course.description}</p>

        </div>

      
    </div>
  )
}
