import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
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
import { registerUser } from '../../redux/actions/userAction';
import {useNavigate} from "react-router-dom"

function RegisterModal() {
  const [modal,setModal]=useState(false)
  const[name,setName]=useState("")
  const[lastName,setLastName]=useState("")
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")


const toggle=()=>{
  setModal(!modal)
}
const dispatch=useDispatch()
const navigate=useNavigate()
const register=()=>{
  const newUser={name,lastName,email,password}
  console.log(newUser,"hello")
  dispatch(registerUser(newUser))
  toggle()
  navigate("/dashboard")

}



    
  return (
    <div style={{ padding: '0 10px',marginTop:"-8px"}}>
    <NavLink  href="#" onClick={toggle}>
      REGISTER
    </NavLink>
    <Modal  isOpen={modal}>
      <ModalHeader>Register</ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input
              type="text"
     onChange={(event)=>setName(event.target.value)}
     
              name="name"
              id="name"
              placeholder="Name"
              className="mb-3"
          
            />
            <Label for="name">Last Name</Label>
            <Input
              type="text"
              onChange={(event)=>setLastName(event.target.value)}
              name="lastName"
              id="lastName"
              placeholder="Last Name"
              className="mb-3"
          
            />
            <Label for="email">Email</Label>
            <Input
              type="email"
              onChange={(event)=>setEmail(event.target.value)}
              name="email"
              id="email"
              placeholder="email"
       
            />
            <Label for="password">Password</Label>
            <Input
              type="password"
              onChange={(event)=>setPassword(event.target.value)}
              name="password"
              id="password"
              placeholder="Password"
              className="mb-3"
 
            />
            <Button
              color="dark"
              style={{ marginTop: '2rem' }}
              block
onClick={register}
            >
              Register
            </Button>
            <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
          </FormGroup>
        </Form>
      </ModalBody>
    </Modal>
  </div>
  )
}

export default RegisterModal