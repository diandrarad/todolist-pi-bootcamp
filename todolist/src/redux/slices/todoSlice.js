import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: [
    {
      id: 1,
      name: 'Walk the dog',
      checked: true,
    },
    {
      id: 2,
      name: 'Go to the gym',
      checked: false,
    },
    {
      id: 3,
      name: 'Study for exam',
      checked: false,
    },
  ],
  reducers: {
    addItem: (state, action) => {
      state.push(action.payload);
    },
    editItem: (state, action) => {
      const { id, name } = action.payload;
      const itemToEdit = state.find(item => item.id === id);
      if (itemToEdit) {
        itemToEdit.name = name;
      }
    },
    deleteItem: (state, action) => {
      const idToDelete = action.payload;
      return state.filter(item => item.id !== idToDelete);
    },
    toggleItem: (state, action) => {
      const idToToggle = action.payload;
      const itemToToggle = state.find(item => item.id === idToToggle);
      if (itemToToggle) {
        itemToToggle.checked = !itemToToggle.checked;
      }
    },
    clearItems: (state) => {
      return [];
    },
  },
});

export const { addItem, editItem, deleteItem, toggleItem, clearItems } = todoSlice.actions;
export default todoSlice.reducer;
