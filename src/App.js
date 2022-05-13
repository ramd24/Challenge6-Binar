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
import ProtectedRoute from "./Component/HOC/ProtectedRoute";
import UnprotectedRoute from "./Component/HOC/UnprotectedRoute";
import Logout from "./Page/Logout";

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    try{
      const token = localStorage.getItem('challengeAccessToken')
      const userData =  jwtDecode(token)
      axios.get(`http://localhost:4000/users/${userData.sub}`)
      .then( res => {
        dispatch( userSlice.actions.addUser({ userData: res.data }))
      })
    } catch {

    }
    
  }, [])

  return (
    <>
        <BrowserRouter>
          <Routes>
            {/* {ALL} */}
            <Route path="/" element={<UserDashboard/>} />
            <Route path="/logout" element={<Logout />} />
            {/* {PUBLIC ONLY} */}
            <Route path="/" element={<UnprotectedRoute />}>
              <Route path="/register" element={<Register/>}/>
              <Route path="/login" element={<Login/>}/>
            </Route>
            {/* {PROTECTED} */}
            <Route path="/" element={<ProtectedRoute />}>
              <Route path="/adminDashboard" element={<AdminDashboard/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
