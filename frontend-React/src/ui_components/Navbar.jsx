
import { useEffect, useState } from "react";
import { Switch } from "@/components/ui/switch";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiAdminFill } from "react-icons/ri";
import ResponsiveNav from "./ResponsiveNav";
import mylogo from '../assets/logo_cm.png'; 
import { Link, NavLink, useNavigate } from "react-router-dom";
import "../index.css"





const Navbar = () => {

      const navigate = useNavigate();

    //for the Navbar show or hide display on mobile and desktop
    const[showNav, setShowNav] = useState(false);


    const [darkMode, setDarkMode] = useState(
      localStorage.getItem("theme") === "dark"
    );

    useEffect(() => {
      if(darkMode){
          document.documentElement.classList.add("dark");
          localStorage.setItem("theme","dark");
      }   else {
          document.documentElement.classList.remove("dark");
          localStorage.setItem("theme","light");
      }
    }, [darkMode]);

  return (
    <>
    <nav className='max-container px-6 py-6 flex justify-between items-center gap-6 top-0 z-10  max-md:py-2 dark:bg-gray-700 '>
        
        <Link to="/" className="text-[#141624] text-2xl dark:text-[#FFFFFF]">
             <div className='w-[150px] h-auto max-md:w-[100px]'>
              <img 
                src={mylogo} 
                className='w-full h-full'
              />
            </div>
        </Link>
      
    <ul className='flex items-center justify-end gap-9 text-gray-800 lg:flex-1 max-md:hidden dark:text-white'>
        <li>
        <NavLink
             to="/about"
                  className={({ isActive }) => (isActive ? "active" : "")}
        >
          About
        </NavLink>
        </li>
        <li>
            <NavLink
             to="/activities"
                  className={({ isActive }) => (isActive ? "active" : "")}
            >
            Activities
            </NavLink>
        </li>
        <li>
            <NavLink
               to="/contact"
                  className={({ isActive }) => (isActive ? "active" : "")}
            >
            Contact
            </NavLink>
        </li>
        
    </ul>

    <Switch
      checked={darkMode}
      onCheckedChange={(checked) => setDarkMode(checked)}  
    />
    <RiAdminFill className="text-2xl cursor-pointer max-md:hidden dark:text-white"  onClick={()=> navigate("/signin")}/>
    <GiHamburgerMenu className="text-2xl cursor-pointer hidden max-md:block dark:text-white" onClick={() => setShowNav(curr => !curr)}/>
    </nav>
    {showNav && <ResponsiveNav />}
    </>
  )
}

export default Navbar