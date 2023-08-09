import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://strangers-things.herokuapp.com/api/COHORT_NAME';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await axios.get(`${BASE_URL}/posts`);
  return response.data.posts;
});
