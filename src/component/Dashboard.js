import React from 'react'
import Card from './Card'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

function Dashboard({ users, setUsers }) {
  let data = [
    {
      title: 'EARNINGS (MONTHLY)',
      value: '$5000',
      color: 'primary',
      icon: 'calendar'
    },
    {
      title: 'EARNINGS (ANNUAL)',
      value: '$60000',
      color: 'success',
      icon: 'dollar-sign'
    },
    {
      title: 'TASKS',
      value: '50',
      color: 'info',
      icon: 'clipboard-list'
    },
    {
      title: 'PENDING REQUESTS',
      value: '18',
      color: 'warning',
      icon: 'comments'
    }

  ]

  let navigate = useNavigate();

  // let handleDelete = (i)=>{
  //   let newArray = [...users]
  //   newArray.splice(i,1)
  //   setUsers(newArray)
  // }
  return <>
    <div id="content-wrapper" className="d-flex flex-column">

      {/* <!-- Main Content --> */}
      <div id="content">

        {/* <!-- Begin Page Content --> */}
        <div className="container-fluid">

          {/* <!-- Page Heading --> */}
          <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
            <a href="javascript(void)" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
              <i className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
          </div>

          {/* <!-- Content Row --> */}
          <div className="row">
            {
              data.map((e, i) => {
                return <Card key={i}
                  title={e.title}
                  value={e.value}
                  color={e.color}
                  icon={e.icon}
                />
              })
            }
          </div>
          <div className='container-fluid'>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Sl.No</th>
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

        </div>

      </div>

    </div>
  </>
}

export default Dashboard