import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import HomeTable from '../Components/HomeTable';
import { useNavigate } from 'react-router-dom';
import { getEmployees } from '../services/allApis';


function Home() {

  // state for holding all employee details
  const [allEmployees,setAllEmployees] = useState([])

  // define a fn to call all employees api
  const getEmployeesDetails = async()=>{
    const serverResponse = await getEmployees()
    console.log(serverResponse);
    setAllEmployees(serverResponse.data)
  }
  console.log(allEmployees) //array of all employees

  useEffect(()=>{
    getEmployeesDetails()
  },[])

  //fn to redirect to register page
  const navigate = useNavigate()

  const addUser=()=>{
    //navigated to register
    navigate('/register')
  }

  return (
    <div>
      <div className='one'>
        <div className='search_add d-flex justify-content-between'>
            {/* search */}
            <div className='search w-100 mt-5 d-flex justify-content-center align-items-center'>
              <Form className='d-flex'>
                <Form.Control
                 required
                 type="text"
                 placeholder="Search Employee"
                />
              <Button type="button" className="btn btn-info ms-2" fdprocessedid="azfi8">Success</Button>
             </Form>
            </div>
        </div>
        <div className='add mt-5 text-center'>
        <Button onClick={addUser} type="button" className="btn btn-success" fdprocessedid="azfi8"><i className='fa-solid fa-user-plus text-white bg-success'></i>  Add Employee</Button>
        </div>

        </div>  
        {/* Table div */}
    <div className='two'>
        <HomeTable displayData={allEmployees}/>
    </div>

    </div>
  )
}

export default Home