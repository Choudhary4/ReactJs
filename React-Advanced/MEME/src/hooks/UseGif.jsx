
import axios from 'axios';
import React, { useEffect, useState } from 'react'
const API_KEY = '2mC4vOZWe83oblmXEr9nRaCdfJKMJzAg'
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`


const UseGif = (tag) => {
  
    const [gif,setGif] = useState();
    const [loading,setLoading] = useState(false)

   async  function fetchData(){
    setLoading(true)

    
    const { data } = await axios.get(tag ? `${url}&tag=${tag}` : url);
       const imageSource = data.data.images.downsized_large.url;
    //   setGif(imageSource);
       console.log(imageSource);
    setGif(imageSource)
        
        setLoading(false)
    }
     useEffect(()=>{
       fetchData()
     },[])
 
     return {gif,loading,fetchData}

}

export default UseGif
