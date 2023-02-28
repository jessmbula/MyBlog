import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from 'reactstrap';
import LoginModal from './auth/LoginModal';
import RegisterModal from './auth/RegisterModal'
import{useSelector,useDispatch} from "react-redux";
import { logoutUser } from '../redux/actions/userAction';
import {useNavigate} from "react-router-dom"
import AddBlog from './pages/AddBlog';
import "./appnav.css";

function AppNavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const user=useSelector((state)=>state.authReducer.user)
    const logoutt=()=>{
      dispatch(logoutUser())
      navigate("/")

    }
  
    const authLinks = (
        <>
          <NavItem>
            <Link to="/dashboard">
              <span className="navbar-text mr-3">
                DASHBOARD
              </span>
            </Link>
          </NavItem>
          <NavLink style={{marginTop:"-8px"}} href="#" onClick={logoutt}>
            LOGOUT
          </NavLink>
          <NavLink href="#" >
          {user && !user.isadmin?<AddBlog/>:null}
     
          </NavLink>
        </>
      );
    
      const guestLinks = (
        <>
          <NavItem>
<RegisterModal/>
          </NavItem>
          <NavItem>
 <LoginModal/>
          </NavItem>
        </>
      );
  return (
    <div>
    <Navbar color="white" light expand="sm" className="mb-5">
      <Container>
        <NavbarBrand href="/">HOME</NavbarBrand>
        <NavbarToggler  onClick={toggle}/>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
      
          <div className="topRight">
        <i className="topIcon fa-brands fa-square-facebook"></i>
        <i className="topIcon fa-brands fa-square-twitter"></i>
        <i className="topIcon fa-brands fa-square-pinterest"></i> 
        <i className="topIcon fa-brands fa-square-instagram"></i>       
        </div>
        


            {user?authLinks:guestLinks}
            

          </Nav>
          
        </Collapse>
      </Container>
    </Navbar>
  </div>
  )
}

export default AppNavBar