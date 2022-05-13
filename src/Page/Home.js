import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Home = () => {
    const user = useSelector( store => store.user.data )
    const navigate = useNavigate();
    

    const loginHandler = () => {
        navigate('/login');
    } 
    const logoutHandler = () => {
        navigate('/logout');
    }

  return (
      <>
        <div>ini Home</div>
        { user === null && 
                <li className="nav-item">
                  <button className="register btn btn-success ml-3" onClick={loginHandler}>Login</button>
                </li>
        }
        { user !== null && 
                <li className="nav-item">
                  <button className="register btn btn-success ml-3" onClick={logoutHandler}>Log out</button>
                </li>
        }
      </>
  )
}

export default Home