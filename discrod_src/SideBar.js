import React, { useState, useEffect } from 'react';
import './SideBar.css';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import SingalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import InfoOutlined from '@material-ui/icons/InfoOutlined';
import CallIcon from '@material-ui/icons/Call';
import Avatar from '@material-ui/core/Avatar';
import SideBarChannel from './SideBarChannel';
import MicIcon from '@material-ui/icons/Mic';
import HeadsetIcon from '@material-ui/icons/Headset';
import SettingsIcon from '@material-ui/icons/Settings';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import db, { auth } from './firebase'

function SideBar() {
    const user = useSelector(selectUser);
    const [channels, setChannels] = useState([]);

    useEffect(()=>{
        db.collection('channels').onSnapshot(snapshot => (
            setChannels(snapshot.docs.map(doc=>({
                id: doc.id,
                channel:doc.data(),
            })))
        ))
    },[])

    const handleAddChannel = () => {
        const channelName = prompt('Enter a new channel name');
        if(channelName){
            db.collection('channels').add({
                channelName:channelName
            });
        }
    };

    return (
        <div className='SideBar'>
            <div className='SideBar__top'>
                <h3>Kingzad Channels</h3>
                <ExpandMoreIcon/>
            </div>
            <div className='SideBar__channels'>
                
                <div className='SideBar__channelHeader'>
                    <div className='SideBar__header'>
                        <ExpandMoreIcon/>
                        <h4>Text Channels</h4>
                    </div>
                    <AddIcon onClick={handleAddChannel} className='SideBar__addChannel' />
                </div>
            </div>
                <div className='SideBar_channelList'>
                    {
                        channels.map(({id, channel}) => (
                            <SideBarChannel key={id} id={id} channelName={channel.channelName} />
                        ))
                    }
                </div>

                <div className='SideBar__voice'>
                    <SingalCellularAltIcon className='SideBar__voiceIcon'/>
                    <div className='SideBar__voiceInfo'>
                        <h3>Voice Connected</h3>
                        <p>Stream</p>
                    </div>
                
                    <div className='SideBar__voiceIcons'>
                        <InfoOutlined />
                        <CallIcon />
                    </div>
                </div>

                <div className='SideBar__profile'>
                    <Avatar onClick={()=> auth.signOut()} src={user.photo} />
                    <div className='SideBar__profileInfo'>
                        <h3>{user.displayName}</h3>
                        <p>#{user.uid.substring(0,4)}</p>
                    </div>

                    <div className='SideBar__profileIcons'>
                        <MicIcon />
                        <HeadsetIcon />
                        <SettingsIcon />
                    </div>
                </div>
            
        </div>
    )
}

export default SideBar
