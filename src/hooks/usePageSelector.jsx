import { useState } from 'react';

const usePageSelector = (pages) => {
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

  return {
    selectedPages,
    togglePage,
    toggleAllPages,
    allSelected: selectedPages.length === pages.length,
  };
};

export default usePageSelector;
