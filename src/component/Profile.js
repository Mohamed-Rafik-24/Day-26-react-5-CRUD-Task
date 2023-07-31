import React from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

function Profile({ users, setUsers }) {
  let navigate = useNavigate();
  return <>
     <div className='container-fluid'>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>DOB</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  users.map((e, i) => {
                    return <tr key={i}>
                      <td>{i + 1}</td>
                      <td>{e.name}</td>
                      <td>{e.email}</td>
                      <td>{e.phone}</td>
                      <td>{e.dob}</td>
                      <td>
                        <Button variant="primary" onClick={() => navigate(`/edit-user/${i}`)}>Edit</Button>{" "}
                        <Button variant="danger" onClick={() => {
                          let newArray = [...users]
                          newArray.splice(i, 1)
                          setUsers(newArray)
                        }}>Delete</Button>
                      </td>
                    </tr>
                  })
                }
              </tbody>
            </Table>
          </div>
  </>
}

export default Profile



