import authHeader from '../../utils/authHeader';
import customFetch from '../../utils/axios';

export const getJobsThunk = async (thunkAPI) => {
  let url = '/jobs';
  try {
    const response = await customFetch.get(url, {
      headers: {
        authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
      },
    });
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const showStatsThunk = async (_, thunkAPI) => {
  try {
    const response = await customFetch('/jobs/stats', authHeader(thunkAPI));
    console.log(response);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};
