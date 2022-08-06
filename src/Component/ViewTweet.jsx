import Button from 'react-bootstrap/Button';
import React, { useEffect } from 'react'

import { useNavigate  } from 'react-router-dom'

const ViewTweet = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if(localStorage.getItem("token") === null){
            navigate("/")
        }
    })


    const postTweet = () => {
        navigate("/post-tweet",{state : {"name" : "sachin"}})
    }

    return(
        <div className='row'>
            <div className='col-xl-6'>
                    {localStorage.getItem("name")}
            </div>
            <div className='col-xl-6'>
            <   div className='row m-5'>
                    <Button variant="primary" onClick={postTweet}>Post Tweet</Button>
                </div>
                <div className='row m-5'>
                    <Button variant="primary">View My Tweet</Button>
                </div>
                <div className='row m-5'>
                    <Button variant="primary">View All Tweet</Button>
                </div>
                <div className='row m-5'>
                    <Button variant="primary">View All User</Button>
                </div>
                <div className='row m-5'>
                    <Button variant="primary">Change Password</Button>
                </div>
            </div>
        </div>
    )
}


export default ViewTweet;