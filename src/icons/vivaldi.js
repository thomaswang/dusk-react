import React from 'react';
import PropTypes from 'prop-types';

const Vivaldi = (props) => {
  const {
    size, bg, fg,
  } = props;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={size} height={size}>
      <circle fill={bg} cx="256" cy="256" r="256" />
      <path fill={fg} d="M378.886 206.628c-31.494 54.583-62.988 109.165-94.483 163.86-5.828 10.198-14.346 16.251-26.002 17.147-13.001.896-23.312-4.596-29.925-15.804-19.95-34.184-39.676-68.592-59.402-102.889-11.992-20.846-24.097-41.692-36.089-62.653-12.105-21.069 1.569-46.736 25.778-47.969 12.777-.673 22.64 5.267 29.141 16.364 8.854 15.13 17.596 30.484 26.451 45.728 6.389 10.984 12.553 22.08 19.053 32.84 9.415 15.804 23.312 24.657 41.806 25.778 26.115 1.569 50.436-17.373 53.575-45.056.224-2.019.336-4.148.447-5.156-.111-8.966-1.793-16.588-5.379-23.65-9.752-19.5.672-41.356 21.855-46.063 17.26-3.811 35.193 8.854 37.435 26.338 1.12 7.511-.45 14.572-4.261 21.185z" />
    </svg>
  );
};

Vivaldi.propTypes = {
  size: PropTypes.number,
  bg: PropTypes.string,
  fg: PropTypes.string,
};

Vivaldi.defaultProps = {
  size: 512,
  bg: '#1e1e1e',
  fg: '#fff',
};

export default Vivaldi;
