import React from 'react';
import PropTypes from 'prop-types';

const FontBook = (props) => {
  const {
    size, bg, fg,
  } = props;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={size} height={size}>
      <circle fill={bg} cx="256" cy="256" r="256" />
      <path fill={fg} d="M233.678 155.275l7.91 90.437 41.911-3.667c9.612-.841 16.469-3.577 20.567-8.21 4.099-4.633 6.331-13.292 6.704-25.975l6.278-.55 6.814 77.881-6.279.549c-.896-8.925-2.627-15.383-5.198-19.378-2.573-3.989-5.902-6.861-9.988-8.614-4.086-1.75-9.976-2.291-17.666-1.618l-41.91 3.667 6.324 72.281c1.018 11.652 2.427 19.279 4.225 22.883 1.377 2.729 3.965 4.954 7.766 6.672 5.213 2.279 10.535 3.18 15.964 2.706l8.314-.728.55 6.279-98.749 8.641-.552-6.28 8.146-.712c9.501-.831 16.156-4.205 19.97-10.125 2.399-3.855 2.994-12.684 1.787-26.486L203.56 186.292c-1.018-11.648-2.426-19.278-4.221-22.882-1.381-2.727-3.914-4.959-7.597-6.688-5.103-2.289-10.424-3.19-15.966-2.707l-8.143.713-.55-6.279 171.201-14.977 6.629 50.369-5.937.52c-3.882-10.489-7.994-18.078-12.336-22.771-4.344-4.689-9.473-7.917-15.381-9.682-5.911-1.761-14.861-2.119-26.851-1.07l-50.73 4.437z" />
    </svg>
  );
};

FontBook.propTypes = {
  size: PropTypes.number,
  bg: PropTypes.string,
  fg: PropTypes.string,
};

FontBook.defaultProps = {
  size: 512,
  bg: '#1e1e1e',
  fg: '#fff',
};

export default FontBook;
