import React from 'react'
import { NavLink } from "react-router-dom";

const ResponsiveNav = () => {
  return (
    <nav className='max-container padding-x py-6 max-md:block hidden dark:text-white'>
        <ul className='flex items-center justify-center gap-6 text-gray-800 lg:flex-1 flex-col dark:text-white'>
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
                     <li>
                        <NavLink
                           to="/signin"
                              className={({ isActive }) => (isActive ? "active" : "")}
                        >
                        Admin
                        </NavLink>
                    </li>
        </ul>
    </nav>
  )
}

export default ResponsiveNav