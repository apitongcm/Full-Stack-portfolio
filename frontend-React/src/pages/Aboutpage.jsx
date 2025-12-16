
import myJumbotron from '../assets/About.png';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Skillpage from '../pages/Skillpage';
import { motion } from "framer-motion";

const Aboutpage = () => {
  return (
    <>
    <section className="max-container py-8 px-8 relative dark:bg-gray-700">
        <h2 className='font-semibold text-4xl mb-6 dark:text-white text-center max-md:text-2xl'>About</h2>
        <div id='About' className='grid grid-cols-3 gap-4 text-justify max-md:grid-cols-1'>
            <div>
                 <h2 className='font-semibold text-left text-5xl mb-6 uppercase max-md:text-3xl dark:text-white max-md:text-center'>
                    Carl Marwin J. Apitong
                </h2>
                <h3 className='leading-normal text-gray-700 max-md:text-sm dark:text-[#4EBB90]'>
                    [Turning 4 Years of Firmware Expertise into a Future in Software & Cybersecurity.]
                </h3>
                <div className='py-3'></div>

                 <motion.p
                    className="leading-normal text-lg text-left max-md:text-sm dark:text-white"
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                      Hi! I'm a graduate of <span className='text-[#13895a] underline font-semibold'>BS Electronics Engineering</span> and project-driven engineer of 4 years experience in the automotive sector, where I was an expert in <span className='text-[#13895a] underline font-semibold'> manual/automation software testing,  embedded systems, and quality assurance. </span>
                       My background was in firmware and low-level software development for safety-critical systems, but now I'm shifting to <span className='text-[#13895a] underline font-semibold'> software development and cybersecurity</span> to further expand my skills and contributions. <br /><br />
                  </motion.p>

            </div>
            <div>
                <motion.p
                    className="leading-normal  text-left text-lg max-md:text-sm dark:text-white"
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                
                Currently, I am studying towards a<span className='text-[#13895a] underline font-semibold'> Master's in Computer Science</span> , further developing my expertise in algorithms, systems design, and advanced software engineering. Concurrently, I'm <span className='text-[#13895a] underline font-semibold'>studying for ISC² Certified in Cybersecurity (CC) </span> certifications to develop expertise in secure software practices, vulnerability scanning, and threat mitigation.
            
                <br />
                <br />
                With growing interests in application security, firmware vulnerabilities, and secure coding methods, my goal is to bridge the gap between traditional software testing and modern cybersecurity practices. I’m passionate about developing not only reliable software but also resilient and secure systems that can withstand evolving digital threats.


                </motion.p>    
            </div>
            <div className='px-3 py-3 rounded-md w-[400px] h-auto flex flex-col max-md:w-[300px]'>
               <motion.div
                           initial={{ opacity: 0, y: -10 }}
                           whileInView={{ opacity: 1, y: 0 }}
                           transition={{ delay: 0.25, duration: 0.5 }}
                           viewport={{ once: true }}
                         >
                <div className='w-full h-[300px] border rounded-md overflow-hidden'>
                    <img 
                        src={myJumbotron}
                        className='w-full h-full object-cover rounded-lg'
                    />
        </div>
        <div className='py-5'>
            <h4 className='dark:text-white'>Software Testing | Software Development | Quality Assurance (QA) | Automotive Engineer | Systems Design | Cybersecurity-Focused</h4>
        </div>
        <div className='flex items-center gap-6 flex-wrap max-md:flex-col-1'>
            <a target="_blank" href="https://github.com/apitongcm?tab=repositories">
                <FaGithub className='text-3xl cursor-pointer dark:text-white'/>
            </a>
            <a target= "_blank" href="https://www.linkedin.com/in/apitongcm/">
                <FaLinkedin className='text-3xl cursor-pointer dark:text-white' />
            </a>
            <HoverCard>
                <HoverCardTrigger> <div className='flex'><MdOutlineMailOutline className='text-3xl cursor-pointer dark:text-white' /><div className='hidden max-md:block text-sm'><h3>apitong.carlmarwin@proton.me</h3></div></div></HoverCardTrigger>
                    <HoverCardContent>
                    apitong.carlmarwin@proton.me
                </HoverCardContent>
            </HoverCard>
         
        </div>
               </motion.div>
        </div>
        </div>
         <div className='grid grid-cols-3 py-5 pt-20 text-justify max-md:grid-cols-1'>
                <div className='w-full h-[300px] overflow-hidden'>
                    <img 
                        src="https://images.unsplash.com/photo-1517026575980-3e1e2dedeab4?q=80&w=1098&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        className='w-full h-full object-cover'
                    />
                </div>
                <div className='w-full h-[300px] overflow-hidden'>
                    <img 
                        src="https://images.unsplash.com/photo-1536169470159-76dca77c6db0?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        className='w-full h-full object-cover'
                    />
                </div>
                 <div className='w-full h-[300px] overflow-hidden'>
                    <img 
                        src="https://images.unsplash.com/photo-1543520669-030d96853cbb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        className='w-full h-full object-cover'
                    />
                </div>
             </div>
    </section>
    <section>
        <Skillpage/>
    </section>
    </>
  )
}

export default Aboutpage