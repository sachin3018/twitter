import Button from 'react-bootstrap/Button';
import React, { useEffect, useState } from 'react'

import { useNavigate  } from 'react-router-dom'
import {useLocation} from 'react-router-dom'
const PostTweet = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [tweet,setTweet] = useState("")

    useEffect(() => {
        if(localStorage.getItem("token") === null){
            navigate("/")
        }
    })


    const post = () => {
        
    }

    return(
        <div className='row'>
            <div className='col-xl-3'>
                &nbsp;
            </div>
            <div className='col-xl-6'>
                <div className='col m-5'>
                    <label>Enter value : </label>
                    <textarea type="textarea" 
                        name="textValue"
                        onChange={(e) => { setTweet(e.target.value)}}
                        maxLength="240"
                    />
                </div>
                <div>
                    <Button variant="success" onClick={post}>LogIn</Button>
                </div>
            </div>
            <div className='col-xl-3'>
                &nbsp;
            </div>
        </div>
    )
}


export default PostTweet;