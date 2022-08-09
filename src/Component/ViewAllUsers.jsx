import Button from 'react-bootstrap/Button';
import React, { useEffect } from 'react'

import { useNavigate  } from 'react-router-dom'

import { getAllUsers } from './Controller/service'

const ViewAllUsers = () => {
    const navigate = useNavigate();
    const userList = []

    useEffect(() => {
        getAllUsers()
        .then(res => {
            userList = res.user
        })
        .catch(err => {
           console.log("something went wrong");
        })
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
                <div className='row m-5'>
                    {
                        userList.map(user => {
                            return(
                                <div>
                                  header or paragraph tag as the data returning from backend
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}


export default ViewAllUsers;