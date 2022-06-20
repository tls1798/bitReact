import axios from 'axios';
import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'

function DeptList() {
  const [arr,setArr] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:8080/api/dept')
      .then(e => { setArr(e.data) })
  },[])

  return (
    <div>
      <h1>List page</h1>
      {arr.map((bean,idx) => (
        <Card key={bean.deptno}>
          <Card.Header>{bean.deptno}</Card.Header>
          <Card.Body>
            <Card.Title>{bean.dname}</Card.Title>
            <Card.Text>{bean.loc}</Card.Text>
            <Card.Link as={Link} to={"/dept/"+bean.deptno}>Detail</Card.Link>
          </Card.Body>
        </Card>
      ))}
    </div>
  )
}

export default DeptList