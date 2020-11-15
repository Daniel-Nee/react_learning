import React, { useState, useEffect } from 'react'
import TinderCard from 'react-tinder-card'
import './MathCards.css'
import {v4 as UUID} from 'uuid'

function MathCards() {

    const [nums, setNums] = useState([{key: UUID.v4, 
                                       element1:Math.ceil(Math.random()*11), 
                                       element2:Math.ceil(Math.random()*11),
                                       hide: Math.ceil(Math.random()*3)
                                     }]);
    
    const [count,setCount] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCount(count+1)
        }, 1000);

        return () => clearTimeout(timer);
      });

    const onSwipe = (direction) => {
        setNums([...nums,{key: UUID.v4, element1:Math.ceil(Math.random()*10),
                                       element2:Math.ceil(Math.random()*10),
                                       hide: Math.ceil(Math.random()*3)}]);
        
        setCount(0);
      }

    function showQuestin(hid, ele1, ele2){
        let answer = ele1 * ele2
        if(hid===1)
            return "_ x " + ele2 + " = " + answer
        if(hid===2)
            return ele1 + " x _ = " + answer
        if(hid===3)
            return ele1 + " x " + ele2 + " =  _"
    }

       
    return (
        <div className='mathCard'>
            <div className='mathCard_count'> {count} </div>
            {
                nums.map((num, index) =>(
                    <TinderCard
                        onSwipe={onSwipe}
                        key = {index}
                        className ='mswipe'
                        preventSwipe={['up', 'down']}>
                        <div className='mcard' >
                            <center>
                                <h3>
                                    { showQuestin(num.hide, num.element1, num.element2) }
                                </h3>
                            </center>
                        </div>
                    </TinderCard>
                ))
            }
        </div>
    )
}

export default MathCards
