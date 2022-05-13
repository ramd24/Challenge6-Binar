import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserDashboard from './Page/UserDashboard';
import Login from './Page/Login';
import Register from './Page/Register';
import AdminDashboard from './Page/AdminDashboard';

function App() {
  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<h1>Home</h1>} />
            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/userDashboard" element={<UserDashboard/>}/>
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
