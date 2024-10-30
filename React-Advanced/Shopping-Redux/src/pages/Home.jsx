import React, { useEffect, useState } from 'react'
import Product from '../components/Product'
import Spinner from '../components/Spinner';

const Home = () => {
    const API_URL = "https://fakestoreapi.com/products";
    const [loading,setLoading] = useState(false)
    const [posts,setPosts] = useState([])

    async function fetchData(){
      setLoading(true)
      try{
       const res = await fetch(API_URL)
       const data = await res.json()
       console.log(data)
       setPosts(data)
      }
      catch{
        console.error("error agya benchod")
        setPosts([])
      }
      setLoading(false)
    }

    useEffect(()=>{
      fetchData()
    },[])
  return (
    <div>
      {
        loading ? <div className="flex justify-center items-center min-h-screen">
        <Spinner className="justify-items-center" />
      </div> : 
        posts.length > 0 ? (<div className="grid  xs:gridcols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
          {
                posts.map((post)=>(
                  <Product post={post} key={post.id}/>
                ))
          }
        </div>)
       :
        <div className="flex justify-center items-center">  <p>Post Not Found</p> </div>
      }
    </div>
  )
}

export default Home
