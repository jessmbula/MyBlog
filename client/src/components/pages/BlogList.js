import React from 'react'
import{useSelector} from "react-redux"
import BlogCard from './BlogCard'

function BlogList() {

  const blogs=useSelector(state=>state.blogReducer.blogs.article)
  console.log(blogs,"hello blogs")
  return (
    <div style={{ display: "flex", flexWrap: "wrap", margin: "20px" }}>
  
      {blogs && 
      blogs.map((el)=>(
      <BlogCard key={el.id} blog={el} />
      ))
      }
    </div>
  )
}

export default BlogList