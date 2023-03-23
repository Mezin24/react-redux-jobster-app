import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showStats } from '../../features/all-jobs/allJobsSlice';
import { StatsContainer, Loading, ChartsContainer } from '../../components';

const Stats = () => {
  const { isLoading, monthlyApplications } = useSelector(
    (state) => state.allJobs
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showStats());
  }, []);

  return (
    <>
      <StatsContainer />
      {monthlyApplications.length > 0 && <ChartsContainer />}
    </>
  );
};
export default Stats;
