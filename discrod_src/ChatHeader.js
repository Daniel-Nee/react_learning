import React from 'react';
import './ChatHeader.css';
import NotificationIcon from '@material-ui/icons/Notifications';
import EditLocationRoundedIcon from '@material-ui/icons/EditLocationRounded';
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import HelpRoundedIcon from '@material-ui/icons/HelpRounded';

function ChatHeader({channelName}) {
    return (
        <div className='ChatHeader'>
            <div className='ChatHeader__left'>
                <h3>
                    <span className='ChatHeader__hash'>
                    #
                    </span>
                    { channelName }
                </h3>
            </div>
            <div className='ChatHeader__right'>
                <NotificationIcon />
                <EditLocationRoundedIcon />
                <PeopleAltRoundedIcon />
            </div>

            <div className='ChatHeader__search'>
                <input placeholder='search' />
                <SearchRoundedIcon />
            </div>

            <SendRoundedIcon />
            <HelpRoundedIcon />
            
        </div>
    )
}

export default ChatHeader
