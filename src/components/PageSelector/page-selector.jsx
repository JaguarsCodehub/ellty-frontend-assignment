import PageItem from './page-item';
import Separator from './separator';
import usePageSelector from '../../hooks/usePageSelector';

const PageSelector = () => {
  const pages = ['Page 1', 'Page 2', 'Page 3', 'Page 4'];
  const { selectedPages, togglePage, toggleAllPages, allSelected } =
    usePageSelector(pages);

  return (
    <div className='bg-white p-6 rounded-md drop-shadow-xl shadow-2xl w-96 '>
      <label className='flex items-center justify-between mb-4 cursor-pointer'>
        <span className='ml-2 font-montserrat'>All pages</span>
        <input
          type='checkbox'
          checked={allSelected}
          onChange={toggleAllPages}
          className='form-checkbox'
        />
      </label>
      <Separator />
      <div className='py-4'>
        {pages.map((page) => (
          <PageItem
            key={page}
            page={page}
            isSelected={selectedPages.includes(page)}
            togglePage={togglePage}
          />
        ))}
      </div>
      <Separator />
      <button
        className='mt-8 w-full bg-yellow-400/90 hover:bg-yellow-400 text-black font-normal py-2 px-4 rounded-sm'
        onClick={() => alert('Your Pages were submitted, Thankyou !')}
      >
        <span className='font-montserrat font-normal'>Done</span>
      </button>
    </div>
  );
};

export default PageSelector;
