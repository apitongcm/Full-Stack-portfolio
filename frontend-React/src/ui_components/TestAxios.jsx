import { useEffect, useState } from "react";
import API from "../api";
import { Link } from 'react-router-dom'



const TestAxios = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
      API.get("/posts/")
        .then(res => setPosts(res.data))
        .catch(err => console.error(err));
  }, []);


  return (
    <div className="grid grid-cols-3 gap-4  max-md:grid-cols-1">
      { posts.map(post => (
         <div  className='px-3 py-3 rounded-md cursor-pointer w-[300px] h-auto flex flex-col gap-4 dark:bg-white border-white-800 border shadow-lg max-md:w-[250px] '>
           <Link key={post.id} to={`/posts/${post.id}/` }>
            <div className='w-full h-[200px] border rounded-md overflow-hidden'>
            <img 
                src={post.imgLink}
                className='w-full h-full object-cover rounded-lg'
            />
        </div>
        
        <span className='px-2 py-[3px] text-[12px] font-semibold bg-blue-500 text-white rounded-sm self-start'>
           {post.badge}
        </span>

        <h3 className='font-semibold leading-normal text-gray-700 mb-0 '>
             
            { post.title}
          
        </h3>
                <small className='text-gray-800 text-[12px] font-semibold mb-0'>
                        {post.created_at.split("T")[0]}
                </small>
          </Link>
      </div>

      ))}
    </div>
  )
}

export default TestAxios