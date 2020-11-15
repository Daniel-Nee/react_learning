import React from 'react'
import './Pond.css'
import Row from './Row'
import { useSelector } from 'react-redux';
import { selectMatrix } from '../features/matrixSlice';

function Pond() {

    //const pond = Array(10).fill(Array(10).fill(0))
    const pond = useSelector(selectMatrix)
    return (
        <div className='Pond'>
            {
                pond.map((row, index)=> (
                    <Row key={index} row={row} rowIndex={index} /> 
                ))

            }
        </div>
    )
}

export default Pond
