import { AreaChat, BarChat } from '../components';
import Wrapper from '../assets/wrappers/ChartsContainer.js';
import { getAllJobs } from '../features/all-jobs/allJobsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

const ChartsContainer = () => {
  const [showBarChat, setShowBarChat] = useState(true);
  const { monthlyApplications: data } = useSelector((state) => state.allJobs);
  return (
    <Wrapper>
      <h4>Monthly Applications</h4>
      <button type='button' onClick={() => setShowBarChat((prev) => !prev)}>
        {showBarChat ? 'Area chat' : 'Bar chat'}
      </button>
      {showBarChat ? <BarChat data={data} /> : <AreaChat data={data} />}
    </Wrapper>
  );
};
export default ChartsContainer;
