import React from 'react'
import { motion } from "framer-motion";
const MyStack = () => {
  return (
   <>
   
    <motion.h1  className="text-5xl font-bold text-center mb-30 mt-30 max-md:text-2xl"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}>
            
            Tech stacks and Tools I’ve worked with:
    </motion.h1>
     <div className="grid grid-cols-8 px-30 mt-15 gap-2 max-md:px-5">
              <div className="">
                   <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/embeddedc/embeddedc-plain-wordmark.svg" />
              </div>
              <div className="">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
              </div>
              <div className="">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" />
              </div>
              <div>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg" />
              </div>
              <div>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" />
              </div>
              <div>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg" />
              </div>
             <div>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cypressio/cypressio-original.svg" />
             </div>
             <div>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/selenium/selenium-original.svg" />
             </div>
            </div>
             <div className="grid grid-cols-8 px-30 gap-2 mt-15 mb-15 max-md:px-5 max-md:mt-5">
              <div className="">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-original-wordmark.svg" />
         
              </div>
              <div className="">
                  
                
                
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain-wordmark.svg" />
          
          
          
              </div>
              <div className="">
               
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original-wordmark.svg" />
          
              </div>
              <div>
               
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original-wordmark.svg" />
          
              </div>
              <div>
                
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg" />
          
              </div>
              <div>
                
            
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />
          
          
              </div>
             <div>
              
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-original.svg" />
          
             </div>
             <div>
              
            
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/visualbasic/visualbasic-plain.svg" />
          
          
             </div>
            </div>
            <div className='mb-40'></div>
   </>
  )
}

export default MyStack