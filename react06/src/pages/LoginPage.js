import React, { useContext, useRef } from 'react'
import UserCtxt, { LOGIN } from '../modules/store';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate=useNavigate();
  const user = useContext(UserCtxt);
  
  const inputId = useRef();
  const inputPw = useRef();

  const loginHandler=(e) => {
    e.preventDefault();
    console.log(inputId.current.value, inputPw.current.value);
    // select * from ~~ 
    user.dispatch({type:LOGIN,username:inputId.current.value});
    navigate('/');
  }

  return (
    <>
      <h1>login pate</h1>
      <form onSubmit={loginHandler}>
        <lable> id :
          <input ref={inputId} />
        </lable>
        <lable> pw :
          <input ref={inputPw}/>
        </lable>
        <button type='submit'>login</button>
      </form>
    </>
  )
}

export default LoginPage