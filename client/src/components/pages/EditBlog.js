import React,{useState} from 'react'
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    FormGroup,
    Label,
    Input,
  } from "reactstrap";
import { useDispatch } from "react-redux";
import { editBlog } from '../../redux/actions/blogAction';
import "./blogcar.css"

function EditBlog({blog}) {
   const[modal,setModal]=useState(false)
   const[title,setTitle]=useState()
   const[author,setAuthor]=useState(blog.author)
   const[image,setImage]=useState(blog.image)
   const[desc,setDesc]=useState(blog.Desc)
const dispatch=useDispatch()
const toggle=()=>{
setModal(!modal)
}
const editt=()=>{
  const newBlog={author,image,desc}
dispatch(editBlog(blog._id,newBlog))
toggle()
}  
  return (
  <div>
    <i className="singlePostIcon fa-regular fa-pen-to-square"
              onClick={toggle}
              ></i>
    <Modal isOpen={modal}>
      <ModalHeader >edit modal</ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <Label for="exempleTitle">title</Label>
            <Input
      onChange={(e)=>setTitle(e.target.value)}
     value={title}
           
              type="text"
              name="title"
              id="exampleTitle"
            
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleAuthor">author</Label>
            <Input
     
     onChange={(e)=>setAuthor(e.target.value)}
     value={author}
              type="text"
              name="author"
              id="exampleAuthor"
            
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleImage">Image</Label>
            <Input
          onChange={(e)=>setImage(e.target.value)}
          value={image}
              type="text"
              name="image"
              id="exampleImage"
            
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleDesc">Desc</Label>
            <Input
          onChange={(e)=>setDesc(e.target.value)}
          value={desc}
              type="text"
              name="desc"
              id="exampleDesc"
            
            />
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={editt} >
          save
        </Button>{" "}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  </div>
  )
}

export default EditBlog