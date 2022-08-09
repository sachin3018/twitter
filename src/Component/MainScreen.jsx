import Button from 'react-bootstrap/Button';
import React, { useEffect } from 'react'

import { useNavigate  } from 'react-router-dom'

const MainSceen = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if(localStorage.getItem("token") === null){
            navigate("/")
        }
    })
    const label = ['Post Tweet','View My Tweet','View All Tweet','View All User','Change Password']

    const onClickHandle = (index) => {
        var path = null;
        if(label[index] === 'Post Tweet'){
            path = "/post-tweet";
        }if(label[index] === 'View My Tweet'){
            path = "/viewTweet"
            localStorage.setItem("page","my")
        }if(label[index] === 'View All Tweet'){
            path = "/viewTweet"
            localStorage.setItem("page","all")
        }if(label[index] === 'View All User'){
            path = "/viewUser"
        }if(label[index] === 'Change Password'){
            path = '/updatePassword'
        }

        navigate(path)
    }



    return(
        <div className='row'>
            <div className='col-xl-6'>
                    {localStorage.getItem("name")}
            </div>
            <div className='col-xl-6'>
            <   div className='row m-5'>
                    <Button variant="primary" onClick={() => {onClickHandle(0)}}>Post Tweet</Button>
                </div>
                <div className='row m-5'>
                    <Button variant="primary" onClick={() => {onClickHandle(1)}}>View My Tweet</Button>
                </div>
                <div className='row m-5'>
                    <Button variant="primary" onClick={() => {onClickHandle(2)}}>View All Tweet</Button>
                </div>
                <div className='row m-5'>
                    <Button variant="primary" onClick={() => {onClickHandle(3)}}>View All User</Button>
                </div>
                <div className='row m-5'>
                    <Button variant="primary" onClick={() => {onClickHandle(4)}}>Change Password</Button>
                </div>
            </div>
        </div>
    )
}


export default MainSceen;