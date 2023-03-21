import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { json } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  addUserToStorage,
  getUserFromStorage,
  removeUserFromStorage,
} from '../../utils/localStorage';
import {
  registerUserThunk,
  loginUserThunk,
  updateUserThunk,
} from './userThunks';

const initialState = {
  user: getUserFromStorage(),
  isLoading: false,
  isSidebarOpen: false,
};

export const registerUser = createAsyncThunk(
  'user/registerUser',
  async (user, thunkAPI) => {
    return registerUserThunk('/auth/register', user, thunkAPI);
  }
);

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (user, thunkAPI) => {
    return loginUserThunk('/auth/login', user, thunkAPI);
  }
);

export const updateUser = createAsyncThunk(
  'user/updateUser',
  async (user, thunkAPI) => {
    return updateUserThunk('/auth/updateUser', user, thunkAPI);
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    userLogout: (state) => {
      state.user = null;
      state.isSidebarOpen = false;
      removeUserFromStorage();
    },
  },
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
      })
      .addCase(updateUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        const { user } = payload;
        state.isLoading = false;
        state.user = user;
        addUserToStorage(user);
        toast.success('user updated');
      })
      .addCase(updateUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      });
  },
});

export const { toggleSidebar, userLogout } = userSlice.actions;

export default userSlice.reducer;
