// import React, { useEffect, useState } from 'react'
// import { IoCreateSharp } from "react-icons/io5"
// import { CiBookmarkPlus } from "react-icons/ci";
// import { useNavigate } from 'react-router-dom'
// import "./Home.css"
// import Sidebar from './Sidebar';
// import { toast, ToastContainer } from 'react-toastify'





// function Home(){
//     var[data,setdata] = useState([])

//     var navigate = useNavigate()
//     function iconnav(){
//         navigate("/createblog")
//     }

//     async function fetchdata(){
//         var result = await fetch("https://6927d9e3b35b4ffc501346a2.mockapi.io/blog")
//         var myres = await result.json()
//         setdata(myres)
//     }

//     useEffect(()=>{
//         fetchdata()
//     },[])


//     async function iconLibrary(myitem){
//         var response = await fetch("https://6927d9e3b35b4ffc501346a2.mockapi.io/library",{
//             method : "POST",
//             headers : {
//                 "content-type" : "application/json"
//             },
//             body : JSON.stringify(myitem)
//         })
//         if(response.ok){
//             toast.success("added to library")
//         }
//         else{
//             toast.error("failed to added")
//         }
//     }


//     return(
//         <div>
//             <ToastContainer autoClose = {1000}/>
//             <h1>MEDIUM </h1>
//             <div className="icon" onClick={iconnav}><IoCreateSharp /></div>
//             <Sidebar/>

//         <div>
//             <h1>Latest Blogs</h1>
//             {
//                 data.map((item)=>{
//                     return(
//                         <div>
//                             <h2>{item.myTitle}</h2>
//                             <h4>{item.myDescription}</h4>
//                             <button onClick={()=>iconLibrary(item)}><CiBookmarkPlus /></button>
//                         </div>
//                     )
//                 })
//             }
            

//         </div>
//         </div>
//     )
// }
// export default Home




import React, { useEffect, useState } from "react";
import { IoCreateSharp } from "react-icons/io5";
import { CiBookmarkPlus } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import { toast, ToastContainer } from "react-toastify";
import "./Home.css";

function Home() {
  var [data, setdata] = useState([]);
  var [search, setSearch] = useState("");
  var [suggestions, setSuggestions] = useState([]);

  var navigate = useNavigate();

  function iconnav() {
    navigate("/createblog");
  }

  async function fetchdata() {
    var result = await fetch("https://6927d9e3b35b4ffc501346a2.mockapi.io/blog");
    var myres = await result.json();
    setdata(myres);
  }

  useEffect(() => {
    fetchdata();
  }, []);

  async function iconLibrary(myitem) {
    var response = await fetch(
      "https://6927d9e3b35b4ffc501346a2.mockapi.io/library",
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(myitem),
      }
    );

    if (response.ok) toast.success("Added to Library");
    else toast.error("Failed to Add");
  }

  function handleSearchChange(e) {
    const value = e.target.value;
    setSearch(value);

    if (value.trim() === "") {
      setSuggestions([]);
      return;
    }

    const filtered = data.filter((blog) =>
      blog.myTitle.toLowerCase().includes(value.toLowerCase())
    );

    setSuggestions(filtered.slice(0, 5)); 
  }

  const filteredBlogs = data.filter((blog) =>
    blog.myTitle.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="home-container">
      <Sidebar />

      <div className="page-content">
        <ToastContainer autoClose={1000} />

        <div className="create-icon" onClick={iconnav}>
          <IoCreateSharp />
        </div>

        <div className="search-box">
          <input
            type="text"
            placeholder="Search blogs..."
            value={search}
            onChange={handleSearchChange}
          />
        </div>

        {suggestions.length > 0 && (
          <div className="suggestions-box">
            {suggestions.map((s) => (
              <p
                key={s.id}
                onClick={() => {
                  setSearch(s.myTitle);
                  setSuggestions([]);
                }}
              >
                {s.myTitle}
              </p>
            ))}
          </div>
        )}

        <h2 className="section-title">Latest Blogs</h2>

        {filteredBlogs.map((item) => (
          <div className="blog-card" key={item.id}>
            <h3 className="blog-title">{item.myTitle}</h3>
            <p className="blog-desc">{item.myDescription}</p>

            <button className="save-btn" onClick={() => iconLibrary(item)}>
              <CiBookmarkPlus className="save-icon" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;

