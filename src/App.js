import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserDashboard from './Page/UserDashboard';
import Login from './Page/Login';
import Register from './Page/Register';
import AdminDashboard from './Page/AdminDashboard';
import React, { useEffect } from 'react'
import jwtDecode from "jwt-decode";
import axios from "axios";
import { useDispatch } from "react-redux";
import userSlice from "./store/user";

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('challengeAccessToken')
    const userData =  jwtDecode(token)
    axios.get(`http://localhost:4000/users/${userData.sub}`)
    .then( res => {
      dispatch( userSlice.actions.addUser({ userData: res.data }))
    })
  }, [])

  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<UserDashboard/>} />
            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/adminDashboard" element={<AdminDashboard/>}/>
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
