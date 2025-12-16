import React from 'react'
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Workwithme = () => {
  return (
    <>
    <section 
    
     style={{
                backgroundImage:`url(https://images.unsplash.com/photo-1527176930608-09cb256ab504?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
    className='px-20 w-full h-[1100px] pt-20 max-md:px-10 max-md:h-[1300px] '>
        <motion.h1
        className="text-5xl font-bold text-center mb-30 dark:text-[#4EBB90] max-md:text-3xl"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        > Why Work With Me </motion.h1>
        <div className='grid grid-cols-2 mb-20 max-md:grid-cols-1'>
                <motion.div
                className="bg-white px-20 transition-shadow duration-200 dark:bg-[#100c08] max-md:px-5"
                initial="hidden"
                whileInView="visible"
                transition={{ delay: 0.15, duration: 0.5 }}
                viewport={{ once: true }}
                >
                    <motion.h2
                     className="text-[#4EBB90]  text-3xl font-semibold pt-5 px-10 mx-auto "
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    viewport={{ once: true }}
                    >
                        From QA to Dev:
                    </motion.h2>
                    <motion.p
                     className="text-gray-600 text-lg px-10 mx-auto mb-10 dark:text-gray-100"
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    viewport={{ once: true }}
                    >
                        A quality-first mindset applied to building software, not just testing it.
                    </motion.p>
                </motion.div>
        </div>
               <div className='grid grid-cols-2 mb-20 max-md:grid-cols-1'>
                <div></div>
                <motion.div
                className="bg-white px-20 transition-shadow duration-200 dark:bg-[#100c08] max-md:px-5"
                initial="hidden"
                whileInView="visible"
                transition={{ delay: 0.15, duration: 0.5 }}
                viewport={{ once: true }}
                >
                    <motion.h2
                     className="text-[#4EBB90]  text-3xl font-semibold px-10 pt-5 mx-auto "
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    viewport={{ once: true }}
                    >
                        Security-Focused:
                    </motion.h2>
                    <motion.p
                     className="text-gray-600 text-lg px-10 mx-auto mb-10 dark:text-gray-100"
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    viewport={{ once: true }}
                    >
                        Transitioning into AppSec and secure development practices.
                    </motion.p>
                </motion.div>
        </div>
        <div className='grid grid-cols-2 mb-20 max-md:grid-cols-1'>
                <motion.div
                className="bg-white px-20  transition-shadow duration-200 dark:bg-[#100c08] max-md:px-5"
                initial="hidden"
                whileInView="visible"
                transition={{ delay: 0.15, duration: 0.5 }}
                viewport={{ once: true }}
                >
                    <motion.h2
                     className="text-[#4EBB90]  text-3xl font-semibold pt-5 px-10 mx-auto "
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    viewport={{ once: true }}
                    >
                        Future-Ready:
                    </motion.h2>
                    <motion.p
                     className="text-gray-600 text-lg px-10 mx-auto mb-10 dark:text-gray-100"
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    viewport={{ once: true }}
                    >
                        Combining embedded experience with modern frameworks to build connected, resilient solutions.
                    </motion.p>
                </motion.div>
        </div>
        </section>
        <section className='pb-50 dark:bg-gray-700'>
                  <motion.h1
        className="text-2xl px-20 font-bold text-center mt-50 max-md:text-lg "
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        > 
        “Looking for a developer with a QA foundation, IoT expertise, and a clear path into cybersecurity? Let’s connect and build something secure.”
        </motion.h1>
        </section>
    </>
  )
}

export default Workwithme