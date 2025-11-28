// import React, { useEffect, useState } from 'react'
// import { toast, ToastContainer } from 'react-toastify'
// import Sidebar from './Sidebar'


// function Library(){

//     var[data,setdata] = useState([])

//     async function fetchdata(){
//         var result = await fetch("https://6927d9e3b35b4ffc501346a2.mockapi.io/library")
//         var myres = await result.json()
//         setdata(myres)
//     }

//     useEffect(()=>{
//         fetchdata()
//     },[])


//     async function handledelete(id){
//         var result = await fetch(`https://6927d9e3b35b4ffc501346a2.mockapi.io/library/${id}`,{
//             method : "DELETE"
//         })
//         if(result.ok){
//             toast.success("successfully removed from Library")
//             fetchdata()
//         }
//         else{
//             toast.error("Failed to remove")
//         }
//     }
//     return(
//         <div>
//             <ToastContainer autoClose = {1000}/>
//             <h1>MEDIUM</h1>
//             <Sidebar/>
//             <h1>Your Library</h1>
            
//             <div>
//             {
//                 data.map((item)=>{
//                     return(
//                         <div>
//                             <h2>{item.myTitle}</h2>
//                             <h4>{item.myDescription}</h4>
//                             <button onClick={()=>handledelete(item.id)}>Remove</button>
//                         </div>
//                     )
//                 })
//             }

//             </div>



//         </div>
//     )
// }
// export default Library




import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import { toast, ToastContainer } from 'react-toastify'
import "./Library.css"

function Library(){

    var[data,setdata] = useState([])

    async function fetchdata(){
        var result = await fetch("https://6927d9e3b35b4ffc501346a2.mockapi.io/library")
        var myres = await result.json()
        setdata(myres)
    }

    useEffect(()=>{
        fetchdata()
    },[])

    async function handledelete(id){
        var result = await fetch(`https://6927d9e3b35b4ffc501346a2.mockapi.io/library/${id}`,{
            method : "DELETE"
        })
        if(result.ok){
            toast.success("successfully removed from Library")
            fetchdata()
        }
        else{
            toast.error("Failed to remove")
        }
    }

    return(
        <div className="library-layout">
            <Sidebar/>
            <ToastContainer autoClose={1000} />

            <div className="library-content">
                <h1>Your Library</h1>

                {
                    data.map((item)=>(
                        <div className="library-card" key={item.id}>
                            <h2>{item.myTitle}</h2>
                            <p>{item.myDescription}</p>
                            <button onClick={()=>handledelete(item.id)}>Remove</button>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default Library
