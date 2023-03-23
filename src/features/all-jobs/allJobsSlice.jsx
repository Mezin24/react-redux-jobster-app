import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { stat } from 'fs';
import { toast } from 'react-toastify';
import { getJobsThunk, showStatsThunk } from './jobsThunk';

export const getAllJobs = createAsyncThunk('allJobs/getJob', (_, thunkAPI) => {
  return getJobsThunk(thunkAPI);
});

export const showStats = createAsyncThunk('allJobs/stats', showStatsThunk);

const initialFiltersState = {
  search: '',
  searchStatus: 'all',
  searchType: 'all',
  sort: 'latest',
  sortOptions: ['latest', 'oldest', 'a-z', 'z-a'],
};

const initialState = {
  isLoading: false,
  jobs: [],
  totalJobs: 0,
  numOfPages: 1,
  page: 1,
  stats: {},
  monthlyApplications: [],
  ...initialFiltersState,
};

const allJobsSlice = createSlice({
  name: 'allJobs',
  initialState,
  reducers: {
    showLoading: (state) => {
      state.isLoading = true;
    },
    hideLoading: (state) => {
      state.isLoading = false;
    },
    // handleSearchChange: (state, { payload }) => {
    //   const { name, value } = payload;
    //   state[name] = value;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllJobs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllJobs.fulfilled, (state, { payload }) => {
        return {
          ...state,
          isLoading: false,
          ...payload,
        };
      })
      .addCase(getAllJobs.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(showStats.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        showStats.fulfilled,
        (state, { payload: { defaultStats, monthlyApplications } }) => {
          state.isLoading = false;
          state.stats = defaultStats;
          state.monthlyApplications = monthlyApplications;
        }
      )
      .addCase(showStats.rejected, (state) => {
        state.isLoading = false;
        toast.error(payload);
      });
  },
});

export const { hideLoading, showLoading } = allJobsSlice.actions;

export default allJobsSlice.reducer;
