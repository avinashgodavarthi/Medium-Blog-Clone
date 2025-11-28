// import React, { useState } from 'react'
// import Sidebar from './Sidebar'
// import { toast, ToastContainer } from 'react-toastify'

// function CreateBlog(){

//     var[Title,setTitle]= useState("")
//     var[Description,setDescription] = useState("")

//     async function handlecreate(){

//         if(Title.length == 0 || Description.length == 0){
//             toast.warn("Please Fill the Details")
//             return
//         }

//         var formdata = {
//             myTitle : Title,
//             myDescription : Description
//         }

//         var result = await fetch("https://6927d9e3b35b4ffc501346a2.mockapi.io/blog",{
//             method: "POST",
//             headers:{
//                 "content-type" : "application/json"
//             },
//             body : JSON.stringify(formdata)
//         })
//         if(result.ok){
//             toast.success("Blog created Successfully")
//             setTitle("")
//             setDescription("")
//         }
//         else{
//             toast.error("Failed to create the Blog")
//         }
//     }
//     return(

//         <div>
//             <ToastContainer autoClose = {1000}/>
//             <h1>MEDIUM </h1>
//             <Sidebar/>
//             <div>
//                 <h1>Create Blogs</h1>
//             <label htmlFor="">Enter Title</label>
//             <input value={Title} onChange={(e)=>{setTitle(e.target.value)}} type="text" />
//             <label htmlFor="">Enter Description</label>
//             <input  value={Description} onChange={(e)=>{setDescription(e.target.value)}} type="text" />
//             <button onClick={handlecreate}>Create</button>
//          </div>
//         </div>
//     )
// }
// export default CreateBlog





import React, { useState } from 'react'
import Sidebar from './Sidebar'
import { toast, ToastContainer } from 'react-toastify'
import './CreateBlog.css'   

function CreateBlog(){

    var[Title,setTitle]= useState("")
    var[Description,setDescription] = useState("")

    async function handlecreate(){

        if(Title.length == 0 || Description.length == 0){
            toast.warn("Please Fill the Details")
            return
        }

        var formdata = {
            myTitle : Title,
            myDescription : Description
        }

        var result = await fetch("https://6927d9e3b35b4ffc501346a2.mockapi.io/blog",{
            method: "POST",
            headers:{
                "content-type" : "application/json"
            },
            body : JSON.stringify(formdata)
        })
        if(result.ok){
            toast.success("Blog created Successfully")
            setTitle("")
            setDescription("")
        }
        else{
            toast.error("Failed to create the Blog")
        }
    }
    return(

        <div className="create-page">
            <ToastContainer autoClose = {1000}/>
            <h1 className="medium-title">MEDIUM</h1>

            <Sidebar/>

            <div className="editor-container">
                <h1 className="editor-heading">Create New Story</h1>

                <label className="label">Enter Title</label>
                <input 
                    className="input"
                    value={Title} 
                    onChange={(e)=>{setTitle(e.target.value)}} 
                    type="text" 
                />

                <label className="label">Enter Description</label>
                <textarea  
                    className="textarea"
                    value={Description} 
                    onChange={(e)=>{setDescription(e.target.value)}} 
                />

                <button className="publish-btn" onClick={handlecreate}>Publish</button>

            </div>
        </div>
    )
}
export default CreateBlog

