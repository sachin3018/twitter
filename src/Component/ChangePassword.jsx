import Button from 'react-bootstrap/Button';
import React, { useEffect, useState } from 'react'

import { useNavigate  } from 'react-router-dom'
import { changePassword } from './Controller/service'

const ChangePassword = () => {
    const navigate = useNavigate();
    const [password,setPassword] = useState('')

    useEffect(() => {
        if(localStorage.getItem("token") === null){
            navigate("/")
        }
    })


    const changePasswordClick = async () => {
        if(password !== null){
            await changePassword(password).then(res => console.log(res)).catch(err => console.log(err));
            navigate("/mainPage")
        }
        
    }

    return(
        <div className='row'>
            <div className='col-xl-6'>
                    {localStorage.getItem("name")}
            </div>
            <div className='col-xl-6'>
                <div className='row m-5'>
                    <input type="password" placeholder="Password" required={true} onChange={(e) => {setPassword(e.target.value)}} value={password} maxLength="20"/>
                </div>
                <div className='row m-5'>
                    <Button variant="primary" onClick={changePasswordClick}>Update Password</Button>
                </div>
            </div>
        </div>
    )
}


export default ChangePassword;