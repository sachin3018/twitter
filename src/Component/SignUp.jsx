import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import { useNavigate  } from 'react-router-dom'

import {post} from './Controller/service'

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const SignUp = () => {

    const [fname,SetFName] = useState("");
    const [lname,SetLName] = useState("");
    const [email,SetEmail] = useState("")
    const [password,setPassword] = useState("")
    const navigate = useNavigate();
    const [gender,setGender] = useState("Male")
    const [status,setStatus] = useState(504)
    const [dobDate, SetdobDate] = useState(new Date());

    const  signup = async (e) => {
        e.preventDefault();
        var user = User(email,password,fname,lname,gender,dobDate)
        await post(user).then(res => {
            setStatus(res)
            navigate("/")
        })
    }

    return (
        <div className='row'>
            <div className='col-4'>
                &nbsp;
            </div>
            <div className='col-4 mt-5 mb-5'>
                <form onSubmit={signup}>
                    <input type="text" placeholder="First name" required={true} onChange={(e) => {SetFName(e.target.value)}} value={fname} maxLength="20"/>
                    <input type="text" placeholder="Last name" onChange={(e) => {SetLName(e.target.value)}} value={lname} maxLength="20" />
                    <input type="email" placeholder="Email" required={true} onChange={(e) => {SetEmail(e.target.value)}} value={email}/>
                    <input type="password" placeholder="Password"  required={true} onChange={(e) => {setPassword(e.target.value)}} value={password}/>

                    <div>
                        <input type="radio" value="Male" name="gender" checked={gender === "Male"} onChange={(e) => {
                            setGender(e.target.value)
                        }}/> Male
                        <input type="radio" value="Female" name="gender" checked={gender === "Female"} onChange={(e) => {
                            setGender(e.target.value)
                        }}/> Female
                        <input type="radio" value="Other" name="gender" checked={gender === "Other"} onChange={(e) => {
                             setGender(e.target.value)    
                        }}/> Other
                    </div>
                    <div>
                        <DatePicker selected={startDate} onChange={(dobDate) => SetdobDate(dobDate)} required={true}/>
                    </div>

                    <Button variant="success" onClick={login}>LogIn</Button>
                </form>
            </div>
            <div className='col-4'>
                &nbsp;
            </div>
        </div>
      );
}

export default SignUp;