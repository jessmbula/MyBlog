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
import axios from 'axios';
import { registerUser } from '../../redux/actions/userAction';
import {useNavigate} from "react-router-dom"

function RegisterModal() {
  const [modal,setModal]=useState(false)
  const[name,setName]=useState("")
  const[lastName,setLastName]=useState("")
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  const[image,setImage]=useState("")
  const [uploading, setUploading] = useState(false);



const toggle=()=>{
  setModal(!modal)
}
const dispatch=useDispatch()
const navigate=useNavigate()
const register=()=>{
  const newUser={name,lastName,email,password,image}
  console.log(newUser,"hello")
  dispatch(registerUser(newUser))
  toggle()
  navigate("/dashboard")

}
const uploadProfileImage = (e) => {
  const file = e.target.files[0];
  const bodyFormData = new FormData();
  bodyFormData.append("image", file);
  setUploading(true);
  axios
    .post("/api/uploads", bodyFormData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response) => {
      setImage(response.data);
      setUploading(false);
    })
    .catch((err) => {
      console.log(err);
      setUploading(false);
    });
};



    
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
            <FormGroup>
      <>
                  {image ? (
                    <img
                      src={image}
                      width="100%"
                      style={{ margin: "8px 0" }}
                      height="150px"
                      alt="product"
                    />
                  ) : (
                    <div style={{ margin: "8px 0" }}>
                      {!uploading ? "Upload Image For Product" : "Loading ..."}
                    </div>
                  )}
                  <div
                  >
                    Select File
                    <input
                      accept="image/*"
                      type="file"

                      onChange={uploadProfileImage}
                    />
                  </div>
                </>
      </FormGroup>
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