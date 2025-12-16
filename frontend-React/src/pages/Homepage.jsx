
import MyStack from "@/ui_components/myStack";
import Workwithme from "@/ui_components/Workwithme";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";




const Homepage = () => {
  return (
    <>
        <section className=" relative dark:bg-gray-700">
        <header className="w-full h-[600px] max-md:h-[450px] grid grid-cols-2 max-md:grid-cols-1"
            style={{
                backgroundImage:`url(https://images.unsplash.com/photo-1598495037740-2c360cf49e50?q=80&w=1193&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
             <div className="pl-40 pt-20 max-md:pt-15 max-md:pl-0">
                    
                     <motion.h3 
                      className="px-5 font-extrabold  text-6xl leading-none text-gray-200 drop-shadow-lg max-md:text-center dark:text-white max-md:text-[24px]"
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    viewport={{ once: true }}
                      >
                            From <br />Firmware QA to <span className="text-green-400">Secure Software Development.</span>
                     </motion.h3>

                </div>
                       
                <div className="pr-10 pt-35 max-md:pt-0 max-md:pr-0 max-md:text-center">

                      <motion.small 
                      className="text-white text-shadow-lg text-lg font-italic max-md:text-[12px] "
                      initial={{ opacity: 0, y: -10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                      viewport={{ once: true }}
                      >
                      Engineer with around <span className="font-extrabold text-[#4EBB90]">4 years</span> of experience in firmware manual testing, automation testing and embedded systems, now transitioning into <span className="font-extrabold text-[#4EBB90]">software development and cybersecurity</span> to build secure, high-performance applications.
                      </motion.small>
                             <br/>
                      <Link to={`/about`}>
                      <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-[#4EBB90] cursor-pointer mt-5 text-[#FFFFFF] text-[16px] rounded-md w-[150px] py-3 max-md:w-[60%] max-md:text-[12px]">
                            Learn More
                      </motion.button>
                      </Link>
                      <Link target="_blank" to={"https://www.linkedin.com/in/apitongcm/"}>
                       <motion.button 
                       whileHover={{ scale: 1.05 }}
                       whileTap={{ scale: 0.95 }}
                       className="bg-[#FFFFFF] cursor-pointer ml-5 mt-5 text-[#000000] text-[16px] rounded-md w-[150px] py-3 max-md:w-[60%] max-md:text-[12px] max-md:ml-0">
                            Let's Connect
                      </motion.button>
                      </Link>
                      </div>
            </header>
            <MyStack/>
            <Workwithme/>
         </section>
    </>
  )
}

export default Homepage