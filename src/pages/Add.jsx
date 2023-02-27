import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Form, Button} from 'react-bootstrap';
import { insertPost } from "../state/postSlice";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";


const Add = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { loading, error } = useSelector((state) => state.posts)

  const formHandler = (e) => {
    e.preventDefault();
    const id = Math.floor(Math.random() * 500)
    dispatch(insertPost({ id, title,  description }))
      .unwrap()
      .then(() => {
        navigate("/")
      }).catch(error => {
        console.log(error)
      })
  }

  return (
    <Form onSubmit={formHandler}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Title</Form.Label>
        <Form.Control 
          type="text" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Description</Form.Label>
        <Form.Control 
          as="textarea" 
          rows={3} 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
        />
      </Form.Group>

      <Loading loading={loading} error={error}>
        <Button variant="success" type='submit'>Submit</Button>
      </Loading>
    </Form>
  );
}

export default Add