import { useState,useEffect } from 'react'
import './App.css'
import { filterData,apiUrl} from './data'
import Navbar from './components/Navbar'
import Filter from './components/Filter'
import Cards from './components/Cards'
import Spinner from './components/Spinner'
import { toast } from "react-toastify";



function App() {
  const [courses,setCourses] = useState(null)
  const [loading,setLoading] = useState(false)
  const [category,setCategory] = useState(filterData[0].title)
  
  async function fetchData() {
    setLoading(true)
    try{
      const response = await fetch(apiUrl)
    const output = await response.json()
    setCourses(output.data)
  }
  catch(error){
    toast.error("Something Went Wrong");
  }
   setLoading(false) 
  }

  useEffect(()=>{
        fetchData()
  },[])
  return (
    <div className="min-h-screen flex-col flex dark:bg-slate-900">
     <div>
      <Navbar></Navbar>
     </div>
     <div className="dark:bg-slate-700" >

     <div>
      <Filter filterData={filterData} category={category} setCategory={setCategory}></Filter>
     </div>

     <div className="w-11/12 max-w-[1200px] min-h-[50vh] mx-auto flex flex-wrap justify-center items-center">

     { 
       loading? (<Spinner/>) : (<Cards courses={courses} category={category}/>) 
     }
     </div>

     </div>
     
    </div>
  )
}

export default App
