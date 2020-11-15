import React, { useEffect, useState } from 'react';
import './Chat.css';
import ChatHeader from './ChatHeader';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import GifIcon from '@material-ui/icons/Gif';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import Message from './Message';s
import useSelector from 'react-redux';
import { selectChannelId, selectChannelName } from './features/appSlice';
import { selectUser } from './features/userSlice';
import db from './firebase';
import firebase from 'firebase';

function Chat() {

    const user = useSelector(selectUser)
    const channelId = useSelector(selectChannelId);
    const channelName = useSelector(selectChannelName);
    const [input, setInput] = useState('')
    const [messsages, setMesssages] = useState([])

    useEffect(()=>{
        if(channelId){
            db.collection('channels')
            .doc(channelId)
            .collection('messages')
            .orderBy('timestamp', 'desc')
            .onSnapshot((snapshot)=>
                setMesssages(snapshot.doc.map((doc)=>doc.data()))
            );
        }
    },[channelId]);
        
    const sendMessage = e => {
        e.preventDefault();

        db.collection('channels')
        .doc(channelId)
        .collection('message')
        .add({
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            message: input,
            user: user
        })

        setInput('');
    }


    return (
        <div className='Chat'>
            <ChatHeader channelName = { channelName } />

            <div className='Chat__messages'>
                {messsages.map((message)=>(
                    <Message />
                ))}
            </div>

            <div className='Chat__input'>
                <AddCircleIcon fontSize='large' />
                <form>
                    <input
                    disabled = {!channelId}
                    placeholder={`Message #${channelName}`}
                    value={input} 
                    onChange = {(e)=> setInput(e.target.value)}
                    ></input>
                    <button 
                    type='submit' 
                    disabled = {!channelId} 
                    className='Chat__inputButton'
                    onClick = {sendMessage}
                    >Send Message</button>
                </form>

                <div className='chat__inputIcons'>
                    <CardGiftcardIcon />
                    <GifIcon />
                    <EmojiEmotionsIcon />
                </div>
            </div>
        </div>
    )
}

export default Chat
