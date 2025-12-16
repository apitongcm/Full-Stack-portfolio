
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import mylogo from '../assets/logo_cm.png'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#F6F6F7] max-container padding-x py-16 dark:bg-gray-500  w-full ">
      <div className="flex max-lg:gap-5 lg:gap-4 flex-wrap max-md:justify-center justify-between">
        <div className="w-[500px] flex flex-col gap-6 max-md:items-center">


          <p className="text-lg text-[#3a3d5b] leading-[1.5]  max-md:text-center max-md:text-sm dark:text-[#21222a]">
            Apitongcmdev is a multi-domain engineering solutions provider specializing 
            in automotive design, embedded systems, software engineering, verification
             & validation, and cybersecurity. From precision hardware development to secure
              firmware and software design, we deliver solutions that integrate reliability, 
              performance, and compliance with the highest industry standards.
          </p>

          <div className="w-full mt-8 text-md text-gray-500 max-md:text-center dark:text-[#21222a]">
              <h3>Apitongcmdev © 2025</h3>
          </div>
        </div>

        <div className="text-[#181A2A] text-lg flex flex-col gap-4 px-4 max-md:items-center">
          <div className=""></div>
          <p className=" font-semibold text-xl dark:text-white">
            Quick Links
          </p>
          <ul className="flex flex-col gap-4  text-[#3B3C4A] max-md:items-center dark:text-[#97989F]">
           <li>
                               <NavLink
                                    to="/about"
                               >
                                 About
                               </NavLink>
                               </li>
                               <li>
                                   <NavLink
                                    to="/activities"
                                   >
                                   Activities
                                   </NavLink>
                               </li>
                               <li>
                                   <NavLink
                                      to="/contact"
                                   >
                                   Contact
                                   </NavLink>
                               </li>
          </ul>
           <div className="py-3 flex items-center gap-6 cursor-pointer max-md:mt-6 max-md:justify-center">
         <div className='flex items-center gap-6 flex-wrap max-md:flex-col'>
            <a target="_blank" href="https://github.com/apitongcm?tab=repositories">
                <FaGithub className="dark:text-white text-[30px] text-[#141624]" />
            </a>
            <a target= "_blank" href="https://www.linkedin.com/in/apitongcm/">
                <FaLinkedin className="dark:text-white text-[30px] text-[#141624]"  />
            </a>
            <HoverCard>
                <HoverCardTrigger> <div className='flex'><MdOutlineMailOutline className="dark:text-white text-[30px] text-[#141624]"  /><div className='hidden max-md:block text-sm'><h3>apitong.carlmarwin@proton.me</h3></div></div></HoverCardTrigger>
                    <HoverCardContent>
                    apitong.carlmarwin@proton.me
                </HoverCardContent>
            </HoverCard>
        </div>
      </div>
        </div>
        <div>
             <div className="text-[#181A2A] text-[14px] flex flex-col gap-4 px-4 max-md:items-center">
          <div className=""></div>
                    
          <div>
            <a href="/">
                        <div className='w-[250px] h-auto max-md:w-[100px]'>
                          <img 
                            src={mylogo} 
                            className='w-full h-full'
                          />
                        </div>
                    </a>
          </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;