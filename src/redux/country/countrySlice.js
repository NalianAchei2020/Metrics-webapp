import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  countries: [],
  loading: false,
  error: null,
};

export const getCountresData = createAsyncThunk(
  'countries/getcountriesData',
  async () => {
    try {
      const response = await fetch('https://restcountries.com/v3.1/all');
      const data = await response.json();
      const countryData = data.map((country) => ({
        name: country.name.common,
        capital: country.capital,
        continent: country.continents[0],
        flag: country.flags.png,
        population: country.population,
        map: country.maps.googleMaps,
        area: country.area,
      }));
      return countryData;
    } catch (error) {
      throw new Error(error);
    }
  },
);

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCountresData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getCountresData.fulfilled, (state, action) => {
      state.loading = false;
      state.countries = action.payload;
    });
    builder.addCase(getCountresData.rejected, (state, action) => {
      state.error = action.error.message;
    });
  },
});

export default countriesSlice.reducer;
