import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Container, Form } from 'react-bootstrap'

function DeptOne() {
  const [bean, setBean] = useState({});
  const [edit, setEdit] = useState(false);
  
  let { deptno } = useParams();

  let navigate = useNavigate();
  useEffect(()=>{
    console.log(typeof deptno)
    axios.get('http://localhost:8080/api/dept/'+deptno)
      .then(e => {
        console.log(typeof e, e.data)
        setBean(e.data);
      });
  },[])

  const editHandler=(e) => {
    e.preventDefault();
    setEdit(!edit);
    if(edit){
      axios.put('http://localhost:8080/api/dept/'+bean.deptno,bean)
      .then(e => {
         if(e.data.result)
           navigate('/dept')
      });
    }
  };
  const inputHandler=(e) => {
    setBean({...bean,[e.target.name]:e.target.value})
  }
  // const dnameHandler=(e)=>{
  //   setBean({...bean,dname:e.target.value});
  // };
  // const locHandler = (e)=>{
  //   setBean({...bean,loc:e.target.value});
  // }
  const deleteHandler=(e) => {
    axios.delete('http://localhost:8080/api/dept/'+bean.deptno)
      .then(e => e.status==200?navigate('/dept'):window.alert('error'))
      .catch(e => window.alert('error'));
  }
  const backHandler=() => navigate(-1);
  return (
    <Container>
      <h1>{edit?'수정':'상세'} 페이지</h1>
      <Form onSubmit={editHandler}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>deptno</Form.Label>
          <Form.Control type="text" value={bean.deptno} name="deptno" readOnly={true}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>dname</Form.Label>
          <Form.Control type="text" 
              value={bean.dname} 
              name="dname" 
              readOnly={!edit}
              onChange={inputHandler}
              />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>loc</Form.Label>
          <Form.Control type="text" 
              value={bean.loc} 
              name="loc" 
              readOnly={!edit}
              onChange={inputHandler}
              />
        </Form.Group>
        <Button variant="primary" type="submit">update</Button>
        {edit?
          <Button variant="warning" type="reset">reset</Button>
          :
          <Button variant="danger" type="button" onClick={deleteHandler}>delete</Button>
        }
        <Button variant="default" type="button" onClick={backHandler}>back</Button>
      </Form>
    </Container>
  )
}

export default DeptOne