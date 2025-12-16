import API from "../api";
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import pic from '../assets/profile.jpg'



const Detailpage = () => {

  const {postid} = useParams();  //14; how to automatic change this number
  console.log({postid})
  const[post,setPost] = useState(null);

  useEffect(()=>{
      API.get(`/posts/${postid}/`)
      .then(res => setPost(res.data))
      .catch(err => console.error(err));
  },[postid]);


  if(!post){
      return <p>Loading ...</p>
  }

  return (
    <>
    <div className="padding-dx max-container py-9">

         <span className='px-2 py-[3px] text-[12px] font-semibold bg-blue-500 text-white rounded-sm self-start'>
           {post.badge}
        </span>
        <div className="flex justify-between items-center">
            <h2 className="py-6 leading-normal text-2xl md:text-3xl text-[#181A2A] tracking-wide font-semibold dark:text-[#FFFFFF]">
                {post.title}
            </h2>
        </div>

         <div className="flex items-center gap=4 ">

      
      <span className="flex items-center gap-2">
        <div className="w-[40px] h-[40px] rounded-full overflow-hidden">
          <img
            src={pic}
            className="c rounded-full w-full h-full object-cover"
          />
        </div>

        <small className="text-[#696A75] text-[14px]">
            Carl Marwin J. Apitong
        </small>
      </span>

      <small className="text-[#696A75] text-[14px] ml-3">
            {post.created_at.split("T")[0]}
      </small>


    </div>
   
        <div className="w-full h-[350px] my-9 overflow-hidden rounded-sm">
          <img
            className="w-full h-full object-cover rounded-sm"
            src={post.imgLink}
          />
        </div>
        <p className="text-[16px] leading-[2rem] text-justify text-[#3B3C4A] dark:text-[#BABABF]">
          {post.content}
        </p>
        <p className="mt-20">Please click the link below to continue reading:</p>
         <a className="text-blue-600" href={post.link} target="_blank" rel="noopener noreferrer">{post.link}</a>
    </div>
    </>
  )
}

export default Detailpage