import React from 'react';
import PropTypes from 'prop-types';

const Dropbox = (props) => {
  const {
    size, bg, fg,
  } = props;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={size} height={size}>
      <circle fill={bg} cx="256" cy="256" r="256" />
      <g fill={fg}>
        <path d="M199.564 128.497l-80.646 52.662 55.765 44.653 81.315-50.21zM118.918 270.473l80.646 52.654 56.434-47.098-81.315-50.217zM255.998 276.03l56.433 47.097 80.647-52.654-55.758-44.661z" />
        <path d="M393.078 181.159l-80.647-52.662-56.433 47.105 81.322 50.21zM256.169 286.164l-56.605 46.967-24.22-15.821v17.728l80.825 48.466 80.817-48.466V317.31l-24.22 15.821z" />
      </g>
    </svg>
  );
};

Dropbox.propTypes = {
  size: PropTypes.number,
  bg: PropTypes.string,
  fg: PropTypes.string,
};

Dropbox.defaultProps = {
  size: 512,
  bg: '#1e1e1e',
  fg: '#fff',
};

export default Dropbox;
