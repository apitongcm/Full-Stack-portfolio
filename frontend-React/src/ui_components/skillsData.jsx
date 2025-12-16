import { FaCar } from "react-icons/fa";
import { GiGearHammer } from "react-icons/gi";
import { FaCode } from "react-icons/fa";
import { HiPaintBrush } from "react-icons/hi2";

  const skillsData = [
  {
    icon: <FaCar />,
    title: "Automotive Software",
    skills: [
      { name: "CAN/CXPI communication protocol", level: 92 },
      { name: "JTAG debugging and Testing", level: 87 },
      { name: "CAPL scripting for CAN automation", level: 85 },
      { name: "Renesas ECU development", level: 85 },
      { name: "C/C++ for test scripting", level: 90 }
    ]
  },
  {
    icon: <GiGearHammer />,
    title: "Software Testing",
    skills: [
      { name: "Manual Testing", level: 95 },
      { name: "Test Case Creation", level: 90 },
      { name: "Automation Testing", level: 80 },
      { name: "Regression & Integration Testing", level: 80 },
      { name: "API Testing", level: 82 }
    ]
  },
  {
    icon: <FaCode />,
    title: "Software Development",
    skills: [
      { name: "REACT for Frontend Development", level: 80 },
      { name: "Django for Backend Development", level: 80 },
      { name: "C/C++ for Application Development", level: 75 },
      { name: "VBA Automation Tool", level: 85 },
      { name: "Bash Automation Tool", level: 83 }
    ]
  },
   {
    icon: <HiPaintBrush />,
    title: "CAD Design Skills",
    skills: [
      { name: "Technical drawings", level: 78 },
      { name: "SolidWorks for Part design", level: 74 },
      { name: "CATIA for mechanical design", level: 80 },
      { name: "Tolerance & Dimensioning", level: 87 },
      { name: "Estimation and Mass Investigation", level: 85 }
    ]
  }
];




export default skillsData