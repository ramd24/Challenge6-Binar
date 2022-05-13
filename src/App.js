import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserDashboard from './Page/UserDashboard';
import Login from './Page/Login';
import Register from './Page/Register';
import AdminDashboard from './Page/AdminDashboard';
import React, { useEffect } from 'react'
import jwtDecode from "jwt-decode";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import userSlice from "./store/user";
import ProtectedRoute from "./Component/HOC/ProtectedRoute";
import UnprotectedRoute from "./Component/HOC/UnprotectedRoute";
import Logout from "./Page/Logout";
import Home from './Page/Home'
import AdminRoute from "./Component/HOC/AdminRoute";

function App() {

  const dispatch = useDispatch();
  const user = useSelector( store => store.user.data )

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
            {/* Public */}
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/logout" element={<Logout />} />

            {/* Protected*/}
            <Route path="/" element={<ProtectedRoute />}>
              <Route path="/admin" element={<AdminDashboard />} />
            </Route>
            <Route path="/" element={<ProtectedRoute />}>
              <Route path="/user" element={<UserDashboard />} />
            </Route>
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
