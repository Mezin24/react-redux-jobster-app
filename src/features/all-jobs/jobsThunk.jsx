import authHeader from '../../utils/authHeader';
import customFetch, { checkForUnauthorizedResponse } from '../../utils/axios';

export const getJobsThunk = async (thunkAPI) => {
  const {
    page,
    searchStatus: status,
    searchType: jobType,
    sort,
    search,
  } = thunkAPI.getState().allJobs;
  let url = `/jobs?page=${page}&status=${status}&jobType=${jobType}&sort=${sort}`;

  if (search) {
    url += `&search=${search}`;
  }

  try {
    const response = await customFetch.get(url, {
      headers: {
        authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
      },
    });
    return response.data;
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};

export const showStatsThunk = async (_, thunkAPI) => {
  try {
    const response = await customFetch('/jobs/stats', authHeader(thunkAPI));
    return response.data;
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};
