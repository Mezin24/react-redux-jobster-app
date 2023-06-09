import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Wrapper from '../assets/wrappers/JobsContainer';
import { getAllJobs } from '../features/all-jobs/allJobsSlice';
import { Loading, Job, PageBtnContainer } from './';

const AllJobsContainer = () => {
  const { jobs, isLoading, totalJobs, numOfPages } = useSelector(
    (state) => state.allJobs
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllJobs());
  }, []);

  if (isLoading) {
    return <Loading center />;
  }

  if (jobs.length === 0) {
    return (
      <Wrapper>
        <h2>No jobs to display...</h2>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <h5>
        {totalJobs} job{jobs.length > 1 ? 's' : ''} found
      </h5>
      <div className='jobs'>
        {jobs.map((job) => {
          return <Job key={job._id} {...job} />;
        })}
      </div>
      {numOfPages > 1 && <PageBtnContainer />}
    </Wrapper>
  );
};
export default AllJobsContainer;
