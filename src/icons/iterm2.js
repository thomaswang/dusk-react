import React from 'react';
import PropTypes from 'prop-types';

const iTerm2 = (props) => {
  const {
    size, bg, fg,
  } = props;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={size} height={size}>
      <circle fill={bg} cx="256" cy="256" r="256" />
      <path fill={fg} d="M192.518 248.21c30.42 7.524 42.822 20.138 42.822 42.927 0 25.226-18.02 42.291-46.32 44.516v11.766h-12.61v-11.766c-27.982-2.12-46.32-18.442-47.909-43.562h16.959c1.694 15.264 13.566 25.65 30.95 27.665V261.67l-2.227-.529c-28.831-7.102-41.867-20.352-41.867-42.398 0-23.952 17.17-40.17 44.094-42.396v-11.765h12.61v11.871c25.227 2.227 42.397 18.23 43.669 41.549h-16.746c-1.8-14.203-11.87-23.742-26.923-25.757v55.011l3.498.954zm-16.109-56.07c-16.643 1.908-26.712 11.553-26.712 26.074 0 13.037 7.524 20.562 26.712 25.756v-51.83zm12.611 127.615c17.489-2.121 29.044-12.72 29.044-27.771 0-13.885-8.587-21.835-29.044-27.135v54.906zM277.455 164.582H383.5v182.836H277.455z" />
    </svg>
  );
};

iTerm2.propTypes = {
  size: PropTypes.number,
  bg: PropTypes.string,
  fg: PropTypes.string,
};

iTerm2.defaultProps = {
  size: 512,
  bg: '#1e1e1e',
  fg: '#fff',
};

export default iTerm2;
