import React from 'react'
import './Cell.css'
import { useDispatch } from 'react-redux';
import { makeFrame, makeFrameAsync } from '../features/matrixSlice';

function Cell({cell, rowIndex, columnIndex}) {

    const dispatch = useDispatch();

    const clickCell = e => {
        e.preventDefault();
        console.log("x:", columnIndex,"y:",rowIndex);
        dispatch(makeFrame({x:columnIndex, y:rowIndex, gap:-1}));
        dispatch(makeFrameAsync({x:columnIndex, y:rowIndex, gap:-1}));
    };

    const getColor = (node) => {
        if(node === 0)
            return "Cell__grey";
        else
            return "Cell__" + node % 9;

    };

    return (
        <div className='Cell'>
            <span onClick={clickCell} className={getColor(cell)} >{cell}</span>
        </div>
    )
}
export default Cell
