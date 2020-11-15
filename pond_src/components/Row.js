import React from 'react'
import Cell from './Cell'
import './Row.css'

function Row({row, rowIndex}) {
    return (
        <div className='Row'>
            {
                row.map((cell, index)=> (
                    <Cell key={index} cell={cell} rowIndex={rowIndex} columnIndex={index} />
                ))

            }
        </div>
    )
}

export default Row
