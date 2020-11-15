import React from 'react';
import './Message.css';
import Avatar from '@material-ui/core/Avatar';

function Message({timestamp, user, message}) {
    return (
        <div className='Message'>
            <Avatar src={usr.photo} />
            <div className='Message__info'>
                <h4>{user.displayName}
                <span className='Message_timestamp'>
                { new Date(timestamp?.todate()).toUTCString()}
                </span>
                </h4>
                <p>{message}</p>
            </div>
        </div>
    )
}

export default Message
