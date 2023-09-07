import { configureStore } from '@reduxjs/toolkit';
import countrySlice from './country/countrySlice';

const store = configureStore({
  reducer: {
    countries: countrySlice,
  },
});

export default store;
