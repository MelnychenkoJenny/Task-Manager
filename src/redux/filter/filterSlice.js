import { createSlice } from '@reduxjs/toolkit';

const dataPriority = {
    all: 'all',
    without: 'without',
    low: 'low',
    medium: 'medium',
    high: 'high',
  };
  
  const filterInitialState = {
    priority: dataPriority.all,
  };
  
  const filterSlice = createSlice({
    name: 'filter',
    initialState: filterInitialState,
    reducers: {
      setPriorityFilter(state, action) {
        state.priority = action.payload;
      },
    },
  });
  
  export const { setPriorityFilter } = filterSlice.actions;
  export const filterReducer = filterSlice.reducer;
  