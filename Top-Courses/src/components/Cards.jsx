import React, { useState } from 'react';
import Card from './Card';

export default function Cards({ courses ,category }) {

  const [likedCourses,setLikedCourses] = useState([])
  
  const getAllCourses = () => {
    if (!courses || typeof courses !== 'object') return []; // Safely handle null or invalid courses 

    if(category == "All"){
      let allCourses = [];
      Object.values(courses).forEach(array => {
        array.forEach(data => {
          allCourses.push(data);
        });
      });
      return allCourses;
    }
    else{
      return courses[category]
    }
   
  };

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {getAllCourses().length === 0 ? (
        <p>No courses available</p>
      ) : (
        getAllCourses().map(course => (
          <Card course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses} key={course.id} /> 
        ))
      )}
    </div>
  );
}
