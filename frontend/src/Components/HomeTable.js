import React from 'react'
import { Card, Row, Table } from 'react-bootstrap'
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
import './HomeTable.css'


function HomeTable(displayData) {
  console.log(displayData)
  return (
    <div className='container mt-4'>
        <Row>
            <div className='col'>
                <Card className='align-items-center shadow bg-info'>
                    <Table >
                        <thead>
                            <tr>
                                <th>Reg.No</th>
                                <th>Full Name</th>
                                <th>Email</th>
                                <th>Mobile</th>
                                <th>Status</th>
                                <th >Profile</th>
                                <th>Action</th>

                            </tr>
                        </thead>
                        <tbody>
                   { displayData.length> 0? displayData.map((item,index)=>(
                    <tr>
                    <td>{index+1}</td>
                    <td>{item.fname}</td>
                    <td>{item.email}</td>
                    <td>{item.mobile}</td>
                    <td>
                    <Dropdown>
                      <Dropdown.Toggle variant="success" id="dropdown-status">
                        Active
                      </Dropdown.Toggle>
                      </Dropdown>

                    </td>
                    <td>
                        <img style={{width:'50px'}} className='rounded-circle ' src='https://img.freepik.com/premium-psd/3d-cartoon-character-avatar-isolated-3d-rendering_235528-588.jpg?w=740'/>
                    </td>
                    <td>
                    <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-status">
                      <i className='fa-solid fa-ellipsis-vertical text-white'></i>
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                          <Dropdown.Item>
                            <Link to={'/view-profile/1'} style={{textDecoration:'none'}}>
                            <div>
                          <i className='fa-solid fa-street-view fa-fade text-info me-2'></i>
                            <span className='text-info fw-bold'>View</span> 
                            </div>
                            </Link>
                          </Dropdown.Item>
                          <Dropdown.Item>
                          <Link to={'/edit/1'} style={{textDecoration:'none'}}>
                          <div>
                          <i className='fa-solid fa-user-pen fa-fade text-success me-2'></i>
                          <span className='text-success fw-bold ' >Edit</span> 
                          </div>
                          </Link>
                          </Dropdown.Item>
                          <Dropdown.Item>
                          <Link style={{textDecoration:'none'}}>
                          <div>
                          <i className='fa-solid fa-trash fa-fade text-warning me-2'></i>
                          <span className='text-warning fw-bold'>Delete</span> 
                          </div>
                          </Link>
                          </Dropdown.Item>
                      </Dropdown.Menu>

                    </Dropdown>

                    </td>
                    </tr>
                   )):
                   <tr>
                    <td>Sorry Nothing to Display</td> 
                    </tr>
                              
                   }
                   </tbody>
                    </Table>
                </Card>
            </div>
        </Row>

    </div>
  )
}

export default HomeTable