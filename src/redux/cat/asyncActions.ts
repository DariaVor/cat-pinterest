import { createAsyncThunk } from '@reduxjs/toolkit';
import { Cat, FetchCatsArgs } from './types';
import axios from 'axios';

const apiKey = import.meta.env.VITE_API_KEY

export const fetchCats = createAsyncThunk(
  'cat/fetchCatsStatus',
  async (params: FetchCatsArgs) => {
    const { limit, page } = params;
    const { data } = await axios.get<Cat[]>(
      `https://api.thecatapi.com/v1/images/search?limit=${limit}&page=${page}&api_key=${apiKey}`
    );
    return data as Cat[];
  }
);