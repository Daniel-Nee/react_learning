import { configureStore } from '@reduxjs/toolkit';
import matrixReducer from '../features/matrixSlice';

export default configureStore({
  reducer: {
    matrix: matrixReducer,
  },
});
