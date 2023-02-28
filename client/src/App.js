//import logo from './logo.svg';
import './App.css';
import AppNavBar from './components/AppNavBar'
import {Routes,Route} from "react-router-dom"
import DashBoard from './components/pages/DashBoard'
import Home from './components/pages/Home'
import {useDispatch} from "react-redux"
import { getAuthUser, getUsers } from './redux/actions/userAction';
import { useEffect } from 'react';
import BlogList from './components/pages/BlogList';
import AddBlog from './components/pages/AddBlog';
import { getBlogs } from './redux/actions/blogAction';
function App() {
  const dispatch=useDispatch()

  useEffect(()=>dispatch(getAuthUser()),[])
  useEffect(()=>dispatch(getBlogs()),[])
 
  useEffect(()=>dispatch(getUsers()),[])

  return (
    <div className="App">

      <AppNavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/blogList" element={<BlogList/>}/>
    
      </Routes>  
      
      
    </div>
  );
}

export default App;
