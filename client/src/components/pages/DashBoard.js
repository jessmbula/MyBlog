import React from 'react'
import { useEffect } from 'react';
import {useSelector} from "react-redux"
import { Spinner } from 'reactstrap';
import AddBlog from './AddBlog'
import UserList from './UserList';
import { getUsers } from '../../redux/actions/userAction';
import { useDispatch } from 'react-redux';
import "./dash.css"


function DashBoard() {
 
   const dispatch=useDispatch()
 
  const user=useSelector((state)=>state.authReducer.user)
  useEffect(()=>dispatch(getUsers()),[])
 
  console.log(user,"testtttt")



  if (!user) {
    return (
      <div
        >
      </div>
    );
  }
  return (
    <div>👋
    <h1 className="mb-3 ml-4"> 
   welcome to your space 
    </h1>
    <h5 className="mb-3 ml-4">{user.name}</h5>
    <h5 className="mb-3 ml-4">{user.email}</h5>
    {user && user.isadmin?<UserList />:null}
  
    
  </div>
  )
}

export default DashBoard