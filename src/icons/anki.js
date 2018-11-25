import React from 'react';
import PropTypes from 'prop-types';

const Anki = (props) => {
  const {
    size, bg, fg,
  } = props;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={size} height={size}>
      <circle fill={bg} cx="256" cy="256" r="256" />
      <path fill={fg} d="M236.311 137.913c2.448-7.879 8.35-8.813 13.113-2.077l36.727 51.932c4.764 6.736 15.41 12.161 23.66 12.056l63.602-.812c8.25-.105 10.962 5.218 6.027 11.83l-38.042 50.977c-4.935 6.612-6.804 18.414-4.154 26.227l20.429 60.238c2.649 7.812-1.575 12.037-9.388 9.388l-60.24-20.427c-7.812-2.649-19.615-.78-26.227 4.154l-50.978 38.042c-6.611 4.935-11.936 2.223-11.83-6.027l.814-63.604c.105-8.25-5.319-18.896-12.056-23.66l-51.933-36.725c-6.736-4.764-5.802-10.665 2.077-13.114l60.74-18.881c7.879-2.449 16.328-10.898 18.776-18.777l18.883-60.74z" />
    </svg>
  );
};

Anki.propTypes = {
  size: PropTypes.number,
  bg: PropTypes.string,
  fg: PropTypes.string,
};

Anki.defaultProps = {
  size: 512,
  bg: '#1e1e1e',
  fg: '#fff',
};

export default Anki;
