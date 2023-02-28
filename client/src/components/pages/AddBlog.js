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

//import { registerUser } from '../../redux/actions/userAction';
import {useNavigate} from "react-router-dom"
import { addBlog } from '../../redux/actions/blogAction';

function AddBlog() {
  const [modal,setModal]=useState(false)
  const[title,setTitle]=useState("")
  const[author,setAuthor]=useState("")
  const[image,setImage]=useState("")
  const[desc,setDesc]=useState("")

const [uploading, setUploading] = useState(false);

const toggle=()=>{
  setModal(!modal)
}
const dispatch=useDispatch()
const navigate=useNavigate()

const add=()=>{
  const data={
    title:title,
    author:author,
    image:image,
    desc:desc
  }


  
  dispatch(addBlog(data))
  setModal(!modal)
  setTitle("")
  setAuthor("")
  setImage("")
  setDesc("")
  navigate("/blogList")
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
    <div style={{ padding: '0 15px',marginTop:"-16px" }}>
    <NavLink href="#" onClick={toggle}>
      WRITE
    </NavLink>
    <Modal  isOpen={modal}>
      <ModalHeader>Add</ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <Label for="title">Title</Label>
            <Input
              type="text"
     onChange={(event)=>setTitle(event.target.value)}
     
              name="name"
              id="name"
              placeholder="title"
              className="mb-3"
          
            />
            <Label for="author">Author</Label>
            <Input
              type="text"
              onChange={(event)=>setAuthor(event.target.value)}
              name="lastName"
              id="lastName"
              placeholder="author"
              className="mb-3"
          
            />
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
            <Label for="desc">Desc</Label>
            <Input
              type="text"
              onChange={(event)=>setDesc(event.target.value)}
              name="password"
              id="password"
              placeholder="Tell your story..."
              className="mb-3"
 
            />
            <Button
              color="dark"
              style={{ marginTop: '2rem' }}
              block
  onClick={add}

            >
              Publish
            </Button>
            <Button
              color="dark"
              style={{ marginTop: '2rem' }}
              block
  onClick={toggle}

            >
              Cancel
            </Button>

          </FormGroup>
        </Form>
      </ModalBody>
    </Modal>
  </div>
  )
}

export default AddBlog