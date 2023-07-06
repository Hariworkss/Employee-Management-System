import React from 'react'
import { Card, Row } from 'react-bootstrap'

function ViewProfile() {
  return (
    <div>
        <div className='container'>
            <Card className='m-5 shadow  pb-2'>
                <Card.Body>
                    <Row>
                        <div className='col'>
                          <div className='profile-image mt-2  d-flex justify-content-center'>
                          <img style={{width:'100px'}} className='rounded-circle ' src='https://img.freepik.com/premium-psd/3d-cartoon-character-avatar-isolated-3d-rendering_235528-588.jpg?w=740'/>
                          </div>
                        </div>
                    </Row>
                    <div className='text-center '>
                    <h3 className='mt-2 '>Sagar</h3>
                    <h6 className='mt-2 '><i className='fa-solid fa-envelope mt-1 me-1'></i> Sagar2255@gmail.com</h6>
                    <h6 className='mt-2 '><i className='fa-solid fa-mobile mt-1 me-1 text-info'></i> 9293909933</h6>
                    <h6 className='mt-2 '><i className='fa-solid fa-venus-mars mt-1 me-1 text-warning'></i> Male</h6>
                    <h6 className='mt-2 '><i className='fa-solid fa-location-dot mt-1 me-1 text-success'></i> Kochi</h6>
                    <h6 className='mt-2 '><i className='fa-solid fa-chart-line mt-1 me-1 text-danger'></i> Active</h6>
                    </div>
                </Card.Body>
            </Card>
        </div>
    </div>
  )
}

export default ViewProfile