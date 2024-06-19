import { useState } from 'react';
import PageItem from './page-item';
import Separator from './separator';

const PageSelector = () => {
  const pages = ['Page 1', 'Page 2', 'Page 3', 'Page 4'];
  const [selectedPages, setSelectedPages] = useState([]);

  const togglePage = (page) => {
    setSelectedPages((prev) =>
      prev.includes(page) ? prev.filter((p) => p !== page) : [...prev, page]
    );
  };

  const toggleAllPages = () => {
    if (selectedPages.length === pages.length) {
      setSelectedPages([]);
    } else {
      setSelectedPages(pages);
    }
  };

  return (
    <div className='bg-white p-6 rounded-md shadow-xl w-80'>
      <label className='flex items-center justify-between mb-4 cursor-pointer'>
        <span className='ml-2'>All pages</span>
        <input
          type='checkbox'
          checked={selectedPages.length === pages.length}
          onChange={toggleAllPages}
          className='form-checkbox h-5 w-5 text-yellow-600'
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
        className='mt-4 w-full bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 px-4 rounded-sm'
        onClick={() => alert('Done button clicked')}
      >
        Done
      </button>
    </div>
  );
};

export default PageSelector;
