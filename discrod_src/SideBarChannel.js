import React from 'react'
import './SideBarChannel.css'
import { useDispatch } from 'react-redux'
import { setChannelInfo } from './features/appSlice'


function SideBarChannel({id, channelName}) {

    const dispatch = useDispatch();

    return (
        <div className='SideBarChannel' onClick={()=> dispatch(setChannelInfo({
            channelId: id,
            channelName: channelName
        }))}>
            <h4>
                <span className='SideBarChannel__hash'>#</span>
                {channelName}
            </h4>
        </div>
    )
}

export default SideBarChannel
