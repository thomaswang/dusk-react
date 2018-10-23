import React from 'react';
import PropTypes from 'prop-types';

const Chrome = (props) => {
  const {
    size, bg, fg,
  } = props;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={size} height={size}>
      <circle fill={bg} cx="256" cy="256" r="256" />
      <path fill={fg} d="M316.297 175.133h182.654a253.426 253.426 0 0 0-7.604-20H256c-48.402 0-88.834 34.096-98.608 79.575L80.739 69.421a258.504 258.504 0 0 0-14.964 15.272l95.32 205.54c14.019 38.856 51.216 66.634 94.905 66.634 17.673 0 34.285-4.552 48.73-12.538l-68.358 166.929c6.479.491 13.024.742 19.628.742.564 0 1.125-.018 1.687-.021L339.1 313.178a100.289 100.289 0 0 0 16.254-39.693c.041-.24.08-.48.119-.721A101.557 101.557 0 0 0 356.868 256c-.001-33.1-15.944-62.475-40.571-80.867zM256 331.65c-41.78 0-75.65-33.87-75.65-75.65 0-41.779 33.87-75.65 75.65-75.65 41.781 0 75.65 33.871 75.65 75.65 0 41.78-33.869 75.65-75.65 75.65z" />
    </svg>
  );
};

Chrome.propTypes = {
  size: PropTypes.number,
  bg: PropTypes.string,
  fg: PropTypes.string,
};

Chrome.defaultProps = {
  size: 512,
  bg: '#1e1e1e',
  fg: '#fff',
};

export default Chrome;
