import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Navbar,Container, Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import UserCtxt, { LOGOUT } from './store';


function Menubar() {
    const navigate = useNavigate();
    const user = useContext(UserCtxt);
    useEffect(()=>{
        console.log(user);
    },[])
    const logoutHandler=(e) => {
        e.preventDefault();
        user.dispatch({type:LOGOUT});
        navigate('/login');
    }
    return (
        <>
            <Navbar bg="primary" variant='dark'>
                <Container>
                    <Navbar.Brand as={Link} to='/'>비트교육센터</Navbar.Brand>
                    <Navbar.Toggle />
                    <Nav className="me-auto">
                        <ul className='navbar-nav me-auto mb-2 mb-lg-10'>
                            <li className="nav-item">
                                <Link className='nav-link active' aria-current='page' to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link active' aria-current='page' to="/intro">Intro</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link active' aria-current='page' to="/dept">List</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link active' aria-current='page' to="/dept/add">Add</Link>
                            </li>
                            {user.state.result?
                            <>
                                <li className="nav-item">
                                    <Link className='nav-link active' aria-current='page' to="/logout" onClick={logoutHandler}>Logout</Link>
                                </li>
                                <li>{user.state.username}</li>
                            </>
                            :
                            <>
                                <li className="nav-item">
                                    <Link className='nav-link active' aria-current='page' to="/login">Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className='nav-link active' aria-current='page' to="/join">Join</Link>
                                </li>
                            </>
                            }
                        </ul>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Menubar