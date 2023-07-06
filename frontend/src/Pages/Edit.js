import React from 'react'
import { Button, Card, Row } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import Select from 'react-select'



function Edit() {
  const options = [
    { value: 'active', label: 'Active' },
    { value: 'inactive', label: 'Inactive' },
  ]
  return (
    <div className='mb-4'>
      <div className='container w-50'>
        <h1 className='text-center mt-5'>Employee Register Details</h1>
        <Card className='mt-5  shadow bg-primary  '>
          <div className='text-center p-4'>
          <img style={{width:'100px'}} className='rounded-circle ' src='https://img.freepik.com/premium-psd/3d-cartoon-character-avatar-isolated-3d-rendering_235528-588.jpg?w=740'/>
          </div>
        <Form className=''>
          <Row className=''>
            <Form.Group className='pe-5 ps-5 pt-2 pb-3 '>
              <Form.Label>First Name</Form.Label >
              <Form.Control className=' ps-4'
              required
              type='text'
              placeholder='Enter First Name'
              />
            </Form.Group>
            
            <Form.Group className='pe-5 ps-5 pt-2 pb-3 '>
              <Form.Label>Last Name</Form.Label >
              <Form.Control className=' ps-4'
              required
              type='text'
              placeholder='Enter Last Name'
              />
            </Form.Group>
            
            <Form.Group className='pe-5 ps-5 pt-2 pb-3 '>
              <Form.Label>Email</Form.Label >
              <Form.Control className=' ps-4'
              required
              type='text'
              placeholder='Enter Email Address'
              />
            </Form.Group>

            <Form.Group className='pe-5 ps-5 pt-2 pb-3 '>
              <Form.Label>Mobile</Form.Label >
              <Form.Control className=' ps-4'
              required
              type='text'
              placeholder='Enter Mobile Number'
              />
            </Form.Group>

            {/* Radio Button */}
            <Form.Group className='pe-5 ps-5 pt-2 pb-3 '>
              <Form.Label>Gender</Form.Label >
              <Form.Check className=' ps-4'
              type='radio'
              label={'Male'}
              name='gender'
              value={'Male'}
              />
             <Form.Check className=' ps-4'
              type='radio'
              label={'Female'}
              name='gender'
              value={'Female'}
              />
            <Form.Check className=' ps-4'
              type='radio'
              label={'Other'}
              name='gender'
              value={'Other'}
              />
            </Form.Group>

            {/* Select */}
          <Form.Group className='pe-5 ps-5 pt-2 pb-3 '>
          <Form.Label>Select Employee Status</Form.Label >
          <Select 
          options={options}
          // placeholder='Select Status'
          styles={{
            option:(baseStyles,state)=>({
              ...baseStyles,
              color:'black',
            }) ,
            placeholder:(baseStyles,state)=>({
              ...baseStyles,
              color:'white'
            }) 
          }}
          />

          </Form.Group>

          {/* Upload Photo */}
          <Form.Group className='pe-5 ps-5 pt-2 pb-3 '>
          <Form.Label>Choose a Profile Photo</Form.Label >
           <Form.Control
            name='profile'
            required
            type='file'
           />
          </Form.Group>

          {/* Upload Photo */}
          <Form.Group className='pe-5 ps-5 pt-2 pb-3 '>
          <Form.Label>Location</Form.Label >
           <Form.Control
            name='profile'
            required
            type='text'
            placeholder='Enter Location'
           />
          </Form.Group>

        {/* Submit Button */}
        <Button className='mt-4 bg-info text-dark fw-bold'>Submit</Button>

          </Row>
        </Form>
        </Card>

      </div>
    </div>
  )
}

export default Edit