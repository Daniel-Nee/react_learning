import React from 'react'
import './Subjects.css'
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom';

function Header() {

    return (
        <div className='header'>
            <div className='choice'>
                <Link to='/'>
                    <Button variant="contained" color="primary"> Math Table</Button>
                </Link>
            </div>
            <div className='choice'>
                <Link to='/English'>
                    <Button variant="contained" color="primary"> English </Button>
                </Link>
            </div>
        </div>
    )
}

export default Header
