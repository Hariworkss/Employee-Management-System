import React, { useEffect, useState  } from 'react'
import { Button, Card, Row } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import Select from 'react-select'
import {empRegister} from '../services/allApis'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Register.css"
import {axios} from "axios"
import { useNavigate } from 'react-router-dom';



function Register() {

  // navigate to home page
  const navigate = useNavigate()    //used to navigate to different pages

  // set state for holding the current propic to display on the top
  const  [preview,setPreview] = useState("")

  // state for holding image
  const [image,setImage] = useState("")
  // fn to update image state
  const setProfile=(e)=>{
      // console.log(e);
      setImage(e.target.files[0])
  }
  console.log(image);

  // create state for status
  const [status,setStatus] = useState("Active")
  // to update status
  const updateStatus=(e)=>{
    // console.log(e);  //{ value: 'active', label: 'Active' }
    setStatus(e.value);
  }
  console.log(status)

  // create a state to hold user input data
  const [userData,setUserData] = useState({
    fname:"",
    lname:"",
    email:"",
    mobile:"",
    gender:"",
    location:"",
  })

  // update user data when user enter the input using html - to update userDetails state
  const userDetails=(e)=>{
    console.log(e);  //SyntheticBaseEvent(...)
    // to set state
    const {name,value} = e.target
    setUserData({...userData,[name]:value})
  }

  console.log(userData);

  useEffect(()=>{
    if(image){
      setPreview(URL.createObjectURL(image))    //calling preview image function  //createObjectUrl is a method to take  image as url
    }
  },[image])

  const options = [
    { value: 'active', label: 'Active' },
    { value: 'inactive', label: 'Inactive' },
  ]

  const handleSubmit= async (e)=>{
    e.preventDefault()  //prevent the event to stop reloading the form 
    // get user input data from the form
    const {fname,lname,email,mobile,gender,location} = userData

    if(fname==""){
      toast.error("Please enter first name",{
        className: 'toast-message'
      })
    }
    else if(lname==""){
      toast.error("Please enter last name",{
        className: 'toast-message'
      })
    }
    else if(email==""){
      toast.error("Please enter email",{
        className: 'toast-message'
      })
    }
    else if(mobile==""){
      toast.error("Please enter mobile number",{
        className: 'toast-message'
      })
    }
    else if(gender==""){
      toast.error("Please select gender",{
        className: 'toast-message'
      })
    }
    else if(location==""){
      toast.error("Please enter location",{
        className: 'toast-message'
      })
    }
    else{
      // make api register  call

      // header config
      const headerConfig = {
        "Content-Type":"multipart/form-data"
      }
      // body - form data
      const data = new FormData()
      data.append("user_profile",image)
      data.append("fname",fname)
      data.append("lname",lname)
      data.append("email",email)
      data.append("mobile",mobile)
      data.append("status",status)
      data.append("gender",gender)
      data.append("location",location)

      // api call
      const response = await empRegister(data,headerConfig)
      console.log(response)
      navigate('/')

      // toast("Registered Successfully")
    }
  }

  return (
    <div className='mb-4'>
      <div className='container w-50'>
        <h1 className='text-center mt-5'>Employee Register Details</h1>
        <Card className='mt-5  shadow bg-primary  '>
          <div className='text-center p-4'>
          <img style={{width:'100px'}} className='rounded-circle ' 
          src={preview?preview:'https://img.freepik.com/premium-psd/3d-cartoon-character-avatar-isolated-3d-rendering_235528-588.jpg?w=740'}/>
          </div>
        <Form className=''>
          <Row className=''>
            <Form.Group className='pe-5 ps-5 pt-2 pb-3 '>
              <Form.Label>First Name</Form.Label >
              <Form.Control className=' ps-4'
              required
              type='text'
              placeholder='Enter First Name'

              name='fname'
              onChange={userDetails}
              />
            </Form.Group>
            
            <Form.Group className='pe-5 ps-5 pt-2 pb-3 '>
              <Form.Label>Last Name</Form.Label >
              <Form.Control className=' ps-4'
              required
              type='text'
              placeholder='Enter Last Name'

              name='lname'
              onChange={userDetails}
              />
            </Form.Group>
            
            <Form.Group className='pe-5 ps-5 pt-2 pb-3 '>
              <Form.Label>Email</Form.Label >
              <Form.Control className=' ps-4'
              required
              type='text'
              placeholder='Enter Email Address'

              name='email'
              onChange={userDetails}
              />
            </Form.Group>

            <Form.Group className='pe-5 ps-5 pt-2 pb-3 '>
              <Form.Label>Mobile</Form.Label >
              <Form.Control className=' ps-4'
              required
              type='text'
              placeholder='Enter Mobile Number'

              name='mobile'
              onChange={userDetails}
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
              onChange={userDetails}
              />
             <Form.Check className=' ps-4'
              type='radio'
              label={'Female'}
              name='gender'
              value={'Female'}
              onChange={userDetails}
              />
            <Form.Check className=' ps-4'
              type='radio'
              label={'Other'}
              name='gender'
              value={'Other'}
              onChange={userDetails}
              />
            </Form.Group>

            {/* Select */}
          <Form.Group className='pe-5 ps-5 pt-2 pb-3 '>
          <Form.Label>Select Employee Status</Form.Label >
          <Select 
          onChange={updateStatus}
          defaultInputValue={status}
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
          <Form.Control />
          </Form.Group>

          {/* Upload Photo */}
          <Form.Group className='pe-5 ps-5 pt-2 pb-3 '>
          <Form.Label>Choose a Profile Photo</Form.Label >
           <Form.Control
            name='profile'
            required
            type='file'
            onChange={setProfile}
           />
          </Form.Group>

          {/* Upload Photo */}
          <Form.Group className='pe-5 ps-5 pt-2 pb-3 '>
          <Form.Label>Location</Form.Label >
           <Form.Control
            required
            type='text'
            placeholder='Enter Location'

            name='location'
              onChange={userDetails}
           />
          </Form.Group>

        {/* Submit Button */}
        <Button onClick={handleSubmit} className='mt-4 bg-info text-dark fw-bold'>Submit</Button>

          </Row>
        </Form>
        </Card>

      </div>
      {/* for alert - toast */}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        />    
      </div>
  )
}

export default Register