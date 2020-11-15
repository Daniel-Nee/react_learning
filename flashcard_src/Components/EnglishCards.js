import React, { useState } from 'react'
import TinderCard from 'react-tinder-card'
import './EnglishCards.css'
import {v4 as UUID} from 'uuid'
import {VERBS} from './PastForms'

function EnglishCards() {

    let ind = Math.floor(Math.random()*VERBS.length)

    const [verbcards, setVerbcards] = useState([{key: UUID.v4, 
        verb:VERBS[ind].verb, 
        past:VERBS[ind].past,
        pastp:VERBS[ind].pastp,
        hide: Math.ceil(Math.random()*3)
      }]);


    const onSwipe = (direction) => {

        let indTemp = Math.floor(Math.random()*VERBS.length)

        setVerbcards([...verbcards,{key: UUID.v4, verb:VERBS[indTemp].verb,
                                        past:VERBS[indTemp].past,
                                        pastp:VERBS[indTemp].pastp,
                                        hide:Math.ceil(Math.random()*3)}])
      }

    return (
        <div className='englishCards'>
            {
                verbcards.map((verbcard, index) =>(
                    <TinderCard
                        onSwipe={onSwipe}
                        key = {index}
                        className ='eswipe'
                        preventSwipe={['up', 'down']}>
                        <div className='ecard' >
                            <center>
                                <h3>
                                    {verbcard.verb }<br/> {verbcard.past} <br/> {verbcard.pastp}
                                </h3>
                            </center>
                        </div>
                    </TinderCard>
                ))
            }
        </div>
    )
}

export default EnglishCards
