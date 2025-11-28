// import React from 'react'
// import { GoHome } from "react-icons/go";

// import { IoBookmarks } from "react-icons/io5";
// import { MdAutoStories } from "react-icons/md";
// import { FaUserCircle } from "react-icons/fa";
// import { TbCalendarStats } from "react-icons/tb";
// import { useNavigate } from 'react-router-dom';

// function Sidebar(){
//     var navigate = useNavigate()

//     function iconlibrary(){
//         navigate("/library")
//     }

//     function iconstories(){
//         navigate("/stories")

//     }

//     function iconhome(){
//         navigate("/")
//     }

//     function iconstats(){
//         navigate("/stats")
//     }


 
//     return(
//         <div>
//             <h1 onClick={iconhome}><GoHome />  Home</h1>
            
//             <h1  onClick={iconlibrary}> <IoBookmarks /> Library</h1>
//             <h1 onClick={iconstories}> <MdAutoStories /> Stories</h1>
//             <h1><FaUserCircle /> Profile</h1>
//             <h1 onClick={iconstats}> <TbCalendarStats /> Stats</h1>
//         </div>
//     )
// }
// export default Sidebar







import React from "react";
import { GoHome } from "react-icons/go";
import { IoBookmarks } from "react-icons/io5";
import { MdAutoStories } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { TbCalendarStats } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  var navigate = useNavigate();

  function iconhome() {
    navigate("/");
  }

  function iconlibrary() {
    navigate("/library");
  }

  function iconstories() {
    navigate("/stories");
  }

  function iconstats() {
    navigate("/stats");
  }

  function iconprofile(){
    navigate('/profile')
  }

  return (
    <div className="sidebar-container">
      <h1>MEDIUM</h1>

      <div className="sidebar-item" onClick={iconhome}>
        <GoHome /> Home
      </div>

      <div className="sidebar-item" onClick={iconlibrary}>
        <IoBookmarks /> Library
      </div>

      <div className="sidebar-item" onClick={iconstories}>
        <MdAutoStories /> Stories
      </div>

      <div className="sidebar-item" onClick={iconprofile}>
        <FaUserCircle /> Profile
      </div>

      <div className="sidebar-item" onClick={iconstats}>
        <TbCalendarStats /> Stats
      </div>
    </div>
  );
}

export default Sidebar;
