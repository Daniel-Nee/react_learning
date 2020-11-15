import { createSlice } from '@reduxjs/toolkit';

export const matrixSlice = createSlice({
  name: 'matrix',
  initialState: {
    value: Array(15).fill(Array(15).fill(0)),
  },
  reducers: {
    makeFrame: (state, action) => {
        for(let i=action.payload.gap;i<Math.abs(action.payload.gap)+1;i++){
            for(let j=action.payload.gap;j<Math.abs(action.payload.gap)+1;j++){
              if(Math.abs(i)===Math.abs(action.payload.gap)|| Math.abs(j)===Math.abs(action.payload.gap)){
                if(action.payload.x+i>=0 && action.payload.x+i<state.value.length && action.payload.y+j>=0 && action.payload.y+j < state.value[0].length)
                  state.value[action.payload.y+j][action.payload.x+i] += Math.abs(action.payload.gap);
              }
            }
          }
    },
  },
});

export const { makeFrame } = matrixSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const makeFrameAsync = amount => dispatch => {
    let timeId = setInterval(()=>{
        amount.gap -= 1;
        dispatch(makeFrame(amount));
      },1000)
      setTimeout(() => {
        clearInterval(timeId);
      }, 4000);
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectMatrix = state => state.matrix.value;

export default matrixSlice.reducer;
