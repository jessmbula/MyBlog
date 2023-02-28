import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import BlogList from "../pages/BlogList";
import { getBlogs } from '../../redux/actions/blogAction';
import {useDispatch} from "react-redux";
import Header from "../header/Header";


function Home () {
  return (
    <>
     <Header />
     <div className="home">
     <BlogList />
     
    </div>
    </>
  )
}

export default Home