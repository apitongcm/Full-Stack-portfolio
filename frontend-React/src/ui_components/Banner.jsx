import { motion } from "framer-motion";
import API from "../api";
import { useEffect,useState } from "react";
import { Link } from "react-router-dom";





const Banner = () => {


    const [randomPost, setRandomPost] = useState(null);

    useEffect(()=>{
        API.get("/posts/")
           .then(res =>{
              const posts = res.data;

              if(posts.length > 0){

                  //picking random index to show as headings
                  const randomIndex = Math.floor(Math.random() * posts.length);
                  setRandomPost(posts[randomIndex]);
              }
           })
           .catch(err =>
              console.error(err)
           );
        },[]);

         
   if (!randomPost) return <p>Loading...</p>;

  return (
    <section className=" relative">
        <header key={randomPost.id} className="w-full h-[600px] max-md:h-[450px]"
            style={{
                backgroundImage:`url(${ randomPost.imgLink})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
               
                <div className="px-20 pt-60 max-md:pt-15">
                    
                    <span className='px-2 py-[3px] text-[12px] font-semibold bg-blue-500 text-white rounded-sm self-start'>
                            {randomPost.badge}
                    </span>
                     <h3 className='font-semibold text-shadow-lg text-4xl leading-normal text-white mb-0 dark:text-white max-md:text-[24px]'>
                            {randomPost.title}
                     </h3>
                     <small className='text-white text-shadow-lg text-lg font-italic ml-3 max-md:text-[18px] max-md:ml-0'>
                            Carl Marwin J. Apitong
                      </small>
                      <br />
                      <small className='text-white text-shadow-lg text-lg font-italic ml-3 max-md:text-[14px] max-md:ml-0'> 
                           {randomPost.created_at.split("T")[0]}
                      </small>
                      <br/>
                      <Link to={`/posts/${randomPost.id}/`}>
                      <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-[#4EBB90] cursor-pointer mt-5 text-[#FFFFFF] text-[16px] rounded-md w-[150px] py-3 max-md:w-full max-md:text-[12px]">
                            Read More
                      </motion.button>
                      </Link>
                      <Link to={"/about"}>
                       <motion.button 
                       whileHover={{ scale: 1.05 }}
                       whileTap={{ scale: 0.95 }}
                       className="bg-[#FFFFFF] cursor-pointer ml-5 mt-5 text-[#000000] text-[16px] rounded-md w-[150px] py-3 max-md:w-full max-md:text-[12px] max-md:ml-0">
                            About Author
                      </motion.button>
                      </Link>
                      
                </div>
        </header>
    </section>
  )
}

export default Banner