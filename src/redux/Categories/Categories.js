import { createSlice } from '@reduxjs/toolkit';

const CHECK_STATUS = 'CHECK_STATUS';
const initialState = {
  status: null,
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus: () => ({
      status: 'Under Construction!!!',
    }
    ),

  },
});
export const { checkStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
