import { useDispatch, useSelector } from 'react-redux';
import Wrapper from '../assets/wrappers/SearchContainer';
import { FormRow, FormSelect } from './';

const SearchJobs = () => {
  const { search, searchStatus, searchType, sort, sortOptions, isLoading } =
    useSelector((state) => state.allJobs);
  const { statusOptions, jobTypeOptions } = useSelector((state) => state.job);
  const handleSearch = (e) => {};

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Wrapper>
      <form className='form'>
        <h4>search form</h4>
        <div className='form-center'>
          {/* search position */}

          <FormRow
            type='text'
            name='search'
            value={search}
            handleChange={handleSearch}
          />
          {/* search by status */}
          <FormSelect
            labelText='status'
            name='searchStatus'
            value={searchStatus}
            handleChange={handleSearch}
            list={['all', ...statusOptions]}
          />
          {/* search by type */}
          <FormSelect
            labelText='type'
            name='searchType'
            value={searchType}
            handleChange={handleSearch}
            list={['all', ...jobTypeOptions]}
          />
          {/* sort */}
          <FormSelect
            name='sort'
            value={sort}
            handleChange={handleSearch}
            list={sortOptions}
          />
          <button
            className='btn btn-block btn-danger'
            disabled={isLoading}
            onClick={handleSubmit}
          >
            clear filters
          </button>
        </div>
      </form>
    </Wrapper>
  );
};
export default SearchJobs;
