import React,{useState} from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { TbLayoutDashboard } from "react-icons/tb";
import { CiLogout } from "react-icons/ci"; 
import { BiSolidContact } from "react-icons/bi";

const Sidebar = ({Sidebar, setSidebar}) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true); 

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const toggleDeskSidebar = () => {
    setSidebar(!Sidebar);
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div>
    <button
        className="md:hidden bg-gray-800 text-white p-2 rounded fixed top-4 right-4 z-50"
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? <FaTimes /> : <FaBars />}
      </button>
      <button
        className={`hidden md:block mb-4 rounded hover:text-gray-300 fixed top-4 left-60 z-50 ${Sidebar ? "text-white p-2 bg-gray-800" : "text-gray bg-white p-2"}`}
        onClick={toggleDeskSidebar}
      >
        {Sidebar ? <FaChevronLeft /> : <FaChevronRight />}
      </button>
      <aside
        className={`bg-gray-800 text-white w-64 p-4 flex flex-col transition-all duration-300 ease-in-out transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } fixed top-0 left-0 h-screen z-40 md:relative`}
      >
        
      <div className="mb-8">
        <h2 className="text-xl font-bold">Logo</h2>
      </div>
      
      <nav className="flex-grow">
        <ul>
          <div className='flex mb-4'>
            <TbLayoutDashboard />
            <li className="mt-[-12px] p-2 hover:bg-gray-700 rounded">Dashboard</li>
          </div>
          <div className='flex mb-4'>
            <TbLayoutDashboard />
            <li className="mt-[-12px] p-2 hover:bg-gray-700 rounded">Survey Management</li>
          </div>
          <div className='flex mb-4'>
            <TbLayoutDashboard />
            <li className="mt-[-12px] p-2 hover:bg-gray-700 rounded">Survey Responses</li>
          </div>
          <div className='flex mb-4'>
            <TbLayoutDashboard />
            <li className="mt-[-12px] p-2 hover:bg-gray-700 rounded">Send Survey</li>
          </div>
          <div className='flex mb-4'>
            <BiSolidContact />
            <li className="mt-[-12px] p-2 hover:bg-gray-700 rounded">Contacts</li>
          </div>
        </ul>
      </nav>
      <div className="mt-8">
        <ul>
        <div className='flex mb-4'>
            <TbLayoutDashboard />
            <li className="mt-[-12px] p-2 hover:bg-gray-700 rounded">Contact Us</li>
          </div>
          <div className='flex mb-4'>
            <CiLogout />
            <li className="mt-[-12px] p-2 hover:bg-gray-700 rounded">Logout</li>
          </div>  
        </ul>
      </div>
    </aside>
    </div>
  );
};

export default Sidebar;