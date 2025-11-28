// import React, { useEffect, useState } from 'react'
// import Sidebar from './Sidebar'


// function Stories(){
//     var[data,setdata] = useState([])

//     async function fetchdata(){
//         var result = await fetch("https://6927d9e3b35b4ffc501346a2.mockapi.io/blog")
//         var myres = await result.json()
//         setdata(myres)
//     }

//     useEffect(()=>{
//         fetchdata()

//     },[])


//     return(
//         <div>
//             <h1>MEDIUM </h1>
//             <Sidebar/>
//             <div>
//             <h1>welcome to  Stories</h1>
//           </div>
//           {
//             data.map((item)=>{
//                 return(
//                     <div>
//                         <h2>{item.myTitle}</h2>
//                         <h4>{item.myDescription}</h4>
//                     </div>
//                 )
//             })

//           }
//         </div>
//     )
// }
// export default Stories




import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import "./Stories.css"

function Stories(){

    var[data,setdata] = useState([])

    // Popup states
    var [openPopup, setOpenPopup] = useState(false)
    var [selectedBlog, setSelectedBlog] = useState(null)

    async function fetchdata(){
        var result = await fetch("https://6927d9e3b35b4ffc501346a2.mockapi.io/blog")
        var myres = await result.json()
        setdata(myres)
    }

    useEffect(()=>{
        fetchdata()
    },[])

    function handleOpen(blog){
        setSelectedBlog(blog)
        setOpenPopup(true)
    }

    function handleClose(){
        setOpenPopup(false)
        setSelectedBlog(null)
    }

    return(
        <div className='stories-container'>

            <div className="stories-layout">
                <Sidebar/>

                <div className="stories-content">
                    <h1 className="stories-heading">Welcome to Stories</h1>

                    {
                        data.map((item)=>{
                            return(
                                <div 
                                    className="story-card" 
                                    key={item.id}
                                    onClick={() => handleOpen(item)}  // <-- entire card click
                                >
                                    <h2 className="story-title">
                                        {item.myTitle.split(" ").slice(0,4).join(" ")}...
                                    </h2>

                                    <h4 className="story-description">
                                        {item.myDescription.split(" ").slice(0,20).join(" ")}...
                                    </h4>

                                </div>
                            )
                        })
                    }
                </div>
            </div>

            {/* POPUP MODAL */}
            {openPopup && selectedBlog && (
                  <div className="popup-overlay">
                    <div className="popup-box">
                            
                      <button className="close-btn" onClick={handleClose}>X</button>
                            
                      <div className="popup-scroll">
                        <h2 className='popup-title'>{selectedBlog.myTitle}</h2>
                        <p className='popup-description'>{selectedBlog.myDescription}</p>
                      </div>
                            
                    </div>
                  </div>
                )}


        </div>
    )
}

export default Stories
