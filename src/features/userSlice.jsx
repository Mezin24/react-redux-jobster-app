import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { json } from 'react-router-dom';
import { toast } from 'react-toastify';
import customSlice from '../utils/axios';
import { addUserToStorage, getUserFromStorage } from '../utils/localStorage';

const initialState = {
  user: getUserFromStorage(),
  isLoading: false,
};

export const registerUser = createAsyncThunk(
  'user/registerUser',
  async (user, thunkAPI) => {
    try {
      const { data } = await customSlice.post('/auth/register', user);
      return data.user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (user, thunkAPI) => {
    try {
      const { data } = await customSlice.post('/auth/login', user);
      return data.user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload;
        addUserToStorage(payload);
        toast.success(`Welcome ${payload.name}`);
      })
      .addCase(registerUser.rejected, (state, action) => {
        const { payload } = action;
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload;
        addUserToStorage(payload);
        toast.success(`Welcome back ${payload.name}`);
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      });
  },
});

export default userSlice.reducer;
