import PropTypes from 'prop-types';

const PageItem = ({ page, isSelected, togglePage }) => (
  <label className='flex items-center py-1 justify-between mb-2 cursor-pointer'>
    <span className='ml-2 font-montserrat'>{page}</span>
    <input
      type='checkbox'
      checked={isSelected}
      onChange={() => togglePage(page)}
      className='form-checkbox'
    />
  </label>
);

PageItem.propTypes = {
  page: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  togglePage: PropTypes.func.isRequired,
};

export default PageItem;
