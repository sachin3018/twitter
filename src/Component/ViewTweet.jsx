import Button from 'react-bootstrap/Button';
import React, { useEffect } from 'react'

import { useNavigate  } from 'react-router-dom'

import { viewAllTweet } from './Controller/service'
const ViewTweet = () => {
    const navigate = useNavigate();
    const tweetList = []


    useEffect(() => {
        viewAllTweet(localStorage.getItem("page"))
                         .then(res => {
                            tweetList = res.tweet
                         })
                         .catch(err => {
                            console.log("something went wrong");
                         })
    })


    const postTweet = () => {
        navigate("/post-tweet")
    }

    return(
        <div className='row'>
            <div className='col-xl-6'>
                    {localStorage.getItem("name")}
            </div>
            <div className='col-xl-6'>
                <div className='row m-5'>
                    {
                        tweetList.map(tweet => {
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


export default ViewTweet;