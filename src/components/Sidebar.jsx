
import { Link } from 'react-router-dom'
import { categories } from '../constants'
import { useContext } from 'react'
import { VideoContext } from '../context/videoContext'


const Sidebar = () => {
  const {selectedCategory, setselectedCategory}= useContext(VideoContext)
  return (
    <div className="flex flex-col p-1 md:p-4">
     {categories.map((item,i)=>(
       <Link to={"/"} key={i} onClick={()=>setselectedCategory(item)}>
       <div className={`${selectedCategory.name===item.name&&"bg-[#2d2d2d]"} mb-1 flex gap-2 py-4 px-2 md:px-3 items-center md:text-lg cursor-pointer rounded-md hover:bg-[#2d2d2d]`}>
         <span className="max-md:text-2xl">
       {item.icon}
         </span>
         <span className="max-md:hidden line-clamp-1">{item.name}</span>
         </div>
         {item.divider&&<hr/>}
         </Link>
     ))}
    </div>
  )
}

export default Sidebar
