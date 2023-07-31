import Sidebar from "./component/Sidebar";
import Dashboard from "./component/Dashboard"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AddUser from "./component/AddUser";
import Profile from "./component/Profile";
import PendingRequest from "./component/PendingRequest";
import Task from "./component/Task";
import { useState } from "react";

function App() {
  let [users, setUsers] = useState([
    {
      name: 'mohamed',
      email: 'mohamed@gmail.com',
      phone: '987553235',
      dob: '1997-05-21'
    },
    {
      name: 'rafik',
      email: 'rafik@gmail.com',
      phone: '987587989',
      dob: '1992-09-23'
    },
    {
      name: 'ibrahim',
      email: 'ibrahim@gmail.com',
      phone: '9874366735',
      dob: '1990-12-01'
    },
    {
      name: 'ismail',
      email: 'ismail@gmail.com',
      phone: '987589063',
      dob: '1980-03-30'
    },
  ])
  return <>
  <BrowserRouter>
  <div id="wrapper">
    <Sidebar/>
    <Routes>
      <Route path="/dashboard" element={<Dashboard users={users} setUsers={setUsers}/>}/>
      <Route path="add-user" element={<AddUser users={users} setUsers={setUsers}/>}/>
      <Route path="edit-user/:id" element={<AddUser users={users} setUsers={setUsers}/>}/>
      <Route path="profile" element={<Profile users={users} setUsers={setUsers}/>}/>
      <Route path="pending-request" element={<PendingRequest/>}/>
      <Route path="task" element={<Task/>}/>
      <Route path='*' element={<Navigate to='./dashboard'/>}/>
    </Routes>
  </div>
  </BrowserRouter>
  </>
}

export default App;
