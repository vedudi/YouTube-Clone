import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import api from "../utils/api"
import Sidebar from "../components/Sidebar"
import VideoCard from "../components/VideoCard"


const Results = () => {

    const[videos, setVideos]=useState([])
    const [searchParams]=useSearchParams()
    const query=searchParams.get('search_query')

    useEffect(()=>{
api.get(`/search?query=${query}`).then((res)=>setVideos(res.data.data))
    },[query])

  return (
    <div className="flex gap-3">
        <Sidebar/>
        <div className="mx-auto overflow-auto w-full h-[90vh] p-4">
            <h2 className="text-xl mb-5 ">
                <span className="font-bold">{query}</span>
                <span>için sonuçlar</span>
            </h2>
            <div className="wrapper flex flex-col gap-5 justify-center">
                {videos.map((item,index)=>(<VideoCard isRow={true} key={index} video={item}/>))}
            </div>
        </div>
    </div>
  )
}

export default Results
