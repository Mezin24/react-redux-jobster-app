import Wrapper from '../assets/wrappers/PageBtnContainer';
import { useSelector, useDispatch } from 'react-redux';
import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi';
import { changePage, getAllJobs } from '../features/all-jobs/allJobsSlice';

const PageBtnContainer = () => {
  const { numOfPages, page } = useSelector((state) => state.allJobs);
  const dispatch = useDispatch();

  const pages = Array.from({ length: numOfPages }, (_, index) => index + 1);

  const prevPage = () => {
    const newPage = page - 1 < 1 ? numOfPages : page - 1;
    dispatch(changePage(newPage));
  };
  const nextPage = () => {
    const newPage = page + 1 > numOfPages ? 1 : page + 1;
    dispatch(changePage(newPage));
  };

  return (
    <Wrapper>
      <button className='prev-btn' onClick={prevPage}>
        <HiChevronDoubleLeft />
        prev
      </button>
      <div className='btn-container'>
        {pages.map((pageNumber) => {
          return (
            <button
              type='button'
              className={pageNumber === page ? 'pageBtn active' : 'pageBtn'}
              key={pageNumber}
              onClick={() => {
                dispatch(changePage(pageNumber));
              }}
            >
              {pageNumber}
            </button>
          );
        })}
      </div>
      <button className='next-btn' onClick={nextPage}>
        next
        <HiChevronDoubleRight />
      </button>
    </Wrapper>
  );
};
export default PageBtnContainer;
