import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  item: [],
}

export const timelineSlice = createSlice({
  name: 'timeline',
  initialState,
  reducers: {
    add: (state,action) => {
      state.item = [...state.item,action.payload];
    },
    clear: (state) => {
      state.item = []
    },
    deleteItem:(state,action) => {
      const itemToDelete = action.payload;
      //console.log(itemToDelete);
      state.item = state.item.filter(item => item.title !== itemToDelete.title);
      //console.log(state.item);
    },
  },
})

// Action creators are generated for each case reducer function
export const { add, clear, deleteItem } = timelineSlice.actions

export default timelineSlice.reducer