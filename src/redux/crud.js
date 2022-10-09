import { createSlice } from "@reduxjs/toolkit";

export const crud = createSlice({
  name: "crud",
  initialState: [],
  reducers: {
    create: (state, action) => {
       state = state.push(action.payload);
    },
    edit: (state, action) => {
      let findElement = state.findIndex((x) => x.id === action.payload.id);
      state[findElement] = action.payload;
      state = state[findElement];
    },
    deleteOne: (state, action) => {
      return state = state.filter((x) => x.id !== action.payload.id);
    },
    deleteAll: (state) => {
      return state = [];
    },
  },
});

export const { create, edit, deleteOne, deleteAll } = crud.actions;

export default crud.reducer;
