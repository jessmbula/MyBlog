import React,{useState} from 'react'
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input,
    NavLink,
  } from 'reactstrap';
  import{useDispatch}from "react-redux"
import { loginUser } from '../../redux/actions/userAction';
import {useNavigate} from "react-router-dom"
function LoginModal() {
  const [modal,setModal]=useState(false)
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")


  const toggle=()=>{
    setModal(!modal)
  }
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const login=()=>{
    dispatch(loginUser({email,password}))
    toggle()
    navigate("/")
  }



  return (
    <div style={{ textAlign:"center" , marginTop:"-8px"}}>
    <NavLink  href="#" onClick={toggle}>
      LOGIN
    </NavLink>
    <Modal isOpen={modal}>
      <ModalHeader >Login</ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="email"
onChange={(e)=>setEmail(e.target.value)}
              name="email"
              id="email"
              placeholder="email"
              className="mb-3"
              
            />
            <Label for="password">Password</Label>
            <Input
              type="password"
              onChange={(e)=>setPassword(e.target.value)}
              name="password"
              id="password"
              placeholder="Password"
              className="mb-3"
            
            />
            <Button
              color="dark"
              style={{ marginTop: '2rem' }}
              block
    onClick={login}
            >
              Login
            </Button>
          </FormGroup>
        </Form>
      </ModalBody>
    </Modal>
  </div>
  )
}

export default LoginModal