import React from "react";
import { Card, Button, CardTitle, CardText } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import "./blogcard.css"
import { deleteBlog } from "../../redux/actions/blogAction";
import EditBlog from "./EditBlog"






  const BlogCard = ({ blog }) => {
const dispatch=useDispatch()

const del=()=>{
  
  dispatch(deleteBlog(blog._id))
  
}
const user=useSelector((state)=>state.authReducer.user)
  return (
    <div style={{justifyContent:"space-between", minWidth: "300px", margin: "10px" }} className="card-container">
      <div className="image-container">
          <img src={blog.image} alt="pic" /> 
      </div>  
      <div className="card-content">
        <div className="card-title">
          <h3>{blog.title}</h3>
        </div>
         
        
        <div style={{ display: "flex", justifyContent:"space-between"}}>
        <CardText style={{ marginTop:"0px"}} className="postDate">Author: {blog.author} </CardText>              
        <CardText style={{ marginTop:"0px"}} className="postDate"> {new Date(blog.dateCreation).toDateString()} </CardText>
        </div>
        
       <div className="card-body"><p>{blog.desc}</p></div>
       <div className="btn">
       <button>
        <a>
          VIEW MORE
        </a>
       </button>
       </div>
<>
          {
          user && user._id === blog.user ?( 
            <div style={{ display: "flex", flexDirection:"row-reverse", justifyContent:"space-between"}}>         
        
          <i className="singlePostIcon fa-regular fa-trash-can"
          onClick={del}
          ></i>
             
            <EditBlog blog={blog}/>
          </div>
          
          ) : null
          }
        </>

      
    </div>
    </div>
  );
};

export default BlogCard;