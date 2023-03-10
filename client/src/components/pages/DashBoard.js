import React from 'react'
import { useEffect } from 'react';
import {useSelector} from "react-redux"
import { Spinner } from 'reactstrap';
import AddBlog from './AddBlog'
import UserList from './UserList';
import { getUsers } from '../../redux/actions/userAction';
import { useDispatch } from 'react-redux';
import EditAccount from './EditAccount';
import "./dash.css"


function DashBoard() {
  
 
   const dispatch=useDispatch()
 
  const user=useSelector((state)=>state.authReducer.user)
  useEffect(()=>dispatch(getUsers()),[]);
 
  console.log(user,"testtttt")
  

  


  if (!user) {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <Spinner
        style={{ width: '3rem', height: '3rem', color: 'secondary' }}
        type="grow"
      />
    </div>
    );
  }
  return (
    <div style={{display:"flex", justifyContent:"center"}}>
    <div className='card'>
    <img
          src={user.image}
          alt="avatar"
          style={{ width: '50px', height: '50px', borderRadius: '50%', marginRight: '10px' }}
        />
    <h2 className="mb-3 ml-4">{user.name}</h2>
    <div className="cont"><p>{user.email}</p>
    <p>Welcome to your space {user.name}</p></div>
    <EditAccount user={user}/>
    <div className="link">
                <a href="#"><i className="fab fa-codepen"></i></a>
                <a href="#"><i className="fab fa-github"></i></a>
                <a href="#"><i className="fa-brands fa-twitter"></i></a>
            </div>
    {user && user.isadmin?<UserList />:null}
  
    </div>
  </div>
  )
}

export default DashBoard