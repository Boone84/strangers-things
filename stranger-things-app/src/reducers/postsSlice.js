import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const COHORT_NAME = '2306-fsa-et-web-ft-sf'
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await axios.get(`${BASE_URL}/posts`);
  return response.data.posts;
});

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    data: [],
    status: 'idle',
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default postsSlice.reducer;
