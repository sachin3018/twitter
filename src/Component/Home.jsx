import Button from 'react-bootstrap/Button';
import React from 'react'

import { useNavigate  } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();

    const toRagister = () => {
        navigate("/signup")
    }

    const toLogin = () => {
        navigate("/signin")
    }

    return(
        <div className='row'>
            <div className='col-xl-6'>
                    &nbsp;
            </div>
            <div className='col-xl-6'>
                <div className='row m-5'>
                    <Button variant="primary" onClick={toRagister}>Ragister</Button>
                </div>
                <div className='row m-5'>
                    <Button variant="success" onClick={toLogin}>LogIn</Button>
                </div>
            </div>
        </div>
    )
}


export default Home;