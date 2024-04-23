
import { AiOutlineDislike, AiOutlineLike } from 'react-icons/ai'
import {TiArrowSortedDown} from 'react-icons/ti'

const Comments = ({data}) => {
  return (
<div className="my-6">
    <h2 className="text-xl font-bold">{data.commentsCount} yorum</h2>
    <input type="text" placeholder='yorum ekleyiniz...' className="w-full bg-transparent border-b p-2 outline-none mb-5" />
{data.data.map((i,key)=>(
    <div className="flex gap-2 items-start px-1 py-4">
        <img src={i.authorThumbnail[0].url} alt="logo" className="w-10 h-10 rounded-full" />
        <div className="flex flex-col gap-2">
            <h5 className="flex gap-2 items-center">
                <span className="font-semibold">{i.authorText}</span>
                <span className="text-gray-400">{i.publishedTimeText}</span>
            </h5>
            <p>{i.textDisplay}</p>
            <div className="flex gap-5 items-center">
                <div className="flex gap-1 p-1 rounded cursor-pointer items-center hover:bg-zinc-700">
                    <AiOutlineLike/>{i.likesCount}
                </div>
                <div className=" p-1 rounded cursor-pointer hover:bg-zinc-700">
                    <AiOutlineDislike/>
                </div>
                <button className=" p-1 rounded cursor-pointer hover:bg-zinc-700" > yanıtla </button>

            </div>
            {i.replyCount>0&&(
                <div className="flex w-fit items-center p-1 rounded-md cursor-pointer gap-2 text-blue-500 hover:bg[#3663962]">
                    <TiArrowSortedDown/>
                    {i.replyCount} yanıt
                </div>
            )}
        </div>
    </div>
))}
</div>
  )
}

export default Comments
