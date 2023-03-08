import { createReducer } from '@reduxjs/toolkit';
import { setFilter } from './filter-actions';

const filterReducer = createReducer('', builder => {
  builder.addCase(setFilter, (state, { payload }) => payload);
});

export default filterReducer;
