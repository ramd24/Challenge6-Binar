import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AdminDashboard = () => {

  const user = useSelector( store => store.user.data )
  const navigate = useNavigate();

  const logoutHandler = () => {
    navigate('/logout');
  }

  return (
    <>
      <div>ini admin</div>
      { user !== null && 
          <button className="register btn btn-success ml-3" onClick={logoutHandler}>Log out</button>
      }
    </>
  )
}

export default AdminDashboard