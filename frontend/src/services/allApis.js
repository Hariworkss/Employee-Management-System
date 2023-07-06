import {commonRequest} from './commonRequest';
import {BASE_URL} from './base_url'

// register api call
export const empRegister=async(body,headers)=>{
    return commonRequest('POST',`${BASE_URL}/employee/register`,body,headers)
}
// get all employees api call
export const getEmployees = async()=>{
    return commonRequest('GET',`${BASE_URL}/employee/getEmployees`,"",)
}