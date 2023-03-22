import { useSelector, useDispatch } from 'react-redux';
import { FormRow } from '../../components';
import Wrapper from '../../assets/wrappers/DashboardFormPage';
import { toast } from 'react-toastify';
import { FormSelect } from '../../components';
import {
  handleChange,
  clearValues,
  createJob,
} from '../../features/job/jobSlice';
import { useEffect } from 'react';

const AddJobs = () => {
  const {
    isLoading,
    position,
    company,
    jobLocation,
    jobType,
    jobTypeOptions,
    status,
    statusOptions,
    isEditing,
    editJobId,
  } = useSelector((store) => store.job);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleJobInput = (e) => {
    const { name, value } = e.target;
    dispatch(handleChange({ name, value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!position.trim() || !company.trim() || !jobLocation.trim()) {
      return toast.error('Please, Fill Out All Fields');
    }
    dispatch(
      createJob({
        position,
        company,
        jobLocation,
        jobType,
        status,
      })
    );
  };

  useEffect(() => {
    dispatch(handleChange({ name: 'jobLocation', value: user.location }));
  }, []);

  return (
    <Wrapper>
      <form className='form'>
        <h3>{isEditing ? 'edit job' : 'add job'}</h3>

        <div className='form-center'>
          {/* position */}
          <FormRow
            type='text'
            name='position'
            value={position}
            handleChange={handleJobInput}
          />
          {/* company */}
          <FormRow
            type='text'
            name='company'
            value={company}
            handleChange={handleJobInput}
          />
          {/* location */}
          <FormRow
            type='text'
            labelText='job location'
            name='jobLocation'
            value={jobLocation}
            handleChange={handleJobInput}
          />
          {/* job status */}
          <FormSelect
            handleChange={handleJobInput}
            name='status'
            value={status}
            list={statusOptions}
          />
          {/* job type */}
          <FormSelect
            handleChange={handleJobInput}
            name='jobType'
            value={jobType}
            list={jobTypeOptions}
            labelText='Job Type'
          />

          {/* btn container */}
          <div className='btn-container'>
            <button
              type='button'
              className='btn btn-block clear-btn'
              onClick={() => dispatch(clearValues())}
            >
              clear
            </button>
            <button
              type='submit'
              className='btn btn-block submit-btn'
              onClick={handleSubmit}
              disabled={isLoading}
            >
              {isLoading ? 'Loading...' : 'submit'}
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};
export default AddJobs;
