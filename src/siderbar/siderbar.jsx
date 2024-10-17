import React from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiUser } from "react-icons/fi";

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-green-600 text-white flex flex-col">
      <div className="p-4">
        <img src="" alt="" />
      </div>
      <ul className="flex-1 p-4 space-y-4">
        <li className="hover:bg-gray-700 p-2 rounded flex items-center w-full p-4">
          <FiHome /> <a href="#dashboard" className="ml-2" >Dashboard</a>
        </li>
        <li className="hover:bg-gray-700 p-2 rounded flex items-center w-full p-4">
          <FiUser /><Link to="/account" className="ml-2">Account</Link>
        </li>
        <li className="hover:bg-gray-700 p-2 rounded flex items-center w-full p-4">
          <a href="#profile">Profile</a>
        </li>
        <li className="hover:bg-gray-700 p-2 rounded flex items-center w-full p-4">
          <a href="#settings">Settings</a>
        </li>
        <li className="hover:bg-gray-700 p-2 rounded flex items-center w-full p-4">
          <a href="#logout">Logout</a>
        </li>
        
      </ul>
      
    </div>
  );
};

export default Sidebar;
