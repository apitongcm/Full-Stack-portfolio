
import React from "react";
import { motion } from "framer-motion";
import skillsData from "../ui_components/skillsData"


<skillsDate/>

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

// Circular Progress Component
const ProgressCircle = ({ percentage }) => {
  const radius = 28;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <svg className="w-16 h-16" viewBox="0 0 80 80">
      {/* Background circle */}
      <circle
        className="text-gray-200"
        strokeWidth="6"
        stroke="currentColor"
        fill="transparent"
        r={radius}
        cx="40"
        cy="40"
      />
      {/* Animated progress */}
      <motion.circle
        className="text-blue-500 dark:text-[#4EBB90]"
        strokeWidth="6"
        stroke="currentColor"
        fill="transparent"
        r={radius}
        cx="40"
        cy="40"
        strokeDasharray={circumference}
        strokeDashoffset={circumference}
        animate={{ strokeDashoffset: offset }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />
      {/* Percentage Text */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dy=".3em"
        className="text-sm font-bold fill-gray-700 dark:fill-white"
      >
        {percentage}%
      </text>
    </svg>
  );
};

const Skillpage = () => {
  return (
    <section id="skills" className="py-16 px-6 text-center dark:text-white dark:bg-gray-700 ">
      <motion.h2
        className="text-4xl font-bold mb-2"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Skills Dashboard
      </motion.h2>

      <motion.p
        className="text-gray-600 max-w-xl mx-auto mb-10 dark:text-gray-100"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        viewport={{ once: true }}
      >
        A visual summary of my competencies in cybersecurity, software testing,
        and software development.
      </motion.p>
      <div className="grid grid-cols-1 py-10 mb-10 px-2">
             <div className='w-full h-auto overflow-hidden  text-center px-10 max-md: py-3 '>
                         <h3 className='leading-normal max-md:text-sm dark:text-white'>
                            Versatile technology professional uniting <span className='text-[#13895a] underline font-semibold'>QA, cybersecurity, IoT, and design engineering </span> 
                            into a robust and adaptable skill set. I deliver secure, high-performing software through 
                            rigorous testing, precise bug tracking, and thorough performance analysis—bridging firmware,
                             communication protocols <span className='text-[#13895a] underline font-semibold'>(MQTT, CAN, CXPI, SPI, I2C, UART)</span>, and modern development <span className='text-[#13895a] underline font-semibold'>(C++, Go, JavaScript, Python, React, Node.js).</span>
                               With strong proficiency in 3D CAD tools such as <span className='text-[#13895a] underline font-semibold'>CATIA and SolidWorks</span>,
                               and a passion for integrating hardware, software, and security, I transform complex technical 
                               challenges into practical, market-ready solutions.
                        </h3>   
             </div>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {skillsData.map((category, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-200 dark:bg-gray-900"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: index * 0.15, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">
                 <span className="text-3xl flex justify-center mb-2">{category.icon}</span>
                {category.title}
            </h3>
            <div className="space-y-4">
              {category.skills.map((skill, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between text-left"
                >
                  <div className="flex items-center gap-3 ">
                    <div className="max-md:hidden">
                            <ProgressCircle className="text-[#4EBB90] " percentage={skill.level} />
                    </div>
                    <span className="text-sm text-gray-700 dark:text-white">{skill.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      
    </section>
  );
};

export default Skillpage;
