import React from 'react';
import PropTypes from 'prop-types';

const Teams = (props) => {
  const {
    size, bg, fg,
  } = props;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={size} height={size}>
      <circle fill={bg} cx="256" cy="256" r="256" />
      <g fill={fg}>
        <path d="M344.336 226.226a23.002 23.002 0 0 0 7.271 4.904 22.986 22.986 0 0 0 17.755 0 22.998 22.998 0 0 0 12.176-12.176 22.99 22.99 0 0 0 0-17.753 22.998 22.998 0 0 0-12.176-12.176 22.995 22.995 0 0 0-17.755 0 22.993 22.993 0 0 0-12.175 12.176 22.981 22.981 0 0 0 0 17.753 23.283 23.283 0 0 0 4.904 7.272zM337.654 247.406v68.758h11.457a65.374 65.374 0 0 0 11.726-1.112 36.587 36.587 0 0 0 11.104-3.877 24.757 24.757 0 0 0 8.278-7.304 18.94 18.94 0 0 0 3.266-11.404v-45.061h-45.831zM300.518 218.58a22.177 22.177 0 0 0 8.866-1.788 22.983 22.983 0 0 0 12.165-12.175 22.937 22.937 0 0 0-.011-17.755 22.995 22.995 0 0 0-12.176-12.176 22.178 22.178 0 0 0-8.877-1.788 21.887 21.887 0 0 0-8.812 1.788c-2.077.89-2.731 2.046-5.59 3.438v35.23c2.87 1.401 3.513 2.547 5.59 3.437a21.822 21.822 0 0 0 8.845 1.789zM286.083 334.348c2.87.621 3.897 1.103 5.933 1.38 2.228.322 4.476.483 6.725.494a50.862 50.862 0 0 0 10.334-1.114 30.531 30.531 0 0 0 9.798-3.823 22.53 22.53 0 0 0 7.303-7.249 20.86 20.86 0 0 0 2.881-11.394V233.08h-42.973v101.268h-.001zM128.5 155.722v200.556l148.984 25.786V129.937L128.5 155.722zm108.87 68.758l-25.784 1.146v75.214l-17.187-1.007V226.3l-25.786 1.04v-15.86l68.757-4.188v17.188z" />
      </g>
    </svg>
  );
};

Teams.propTypes = {
  size: PropTypes.number,
  bg: PropTypes.string,
  fg: PropTypes.string,
};

Teams.defaultProps = {
  size: 512,
  bg: '#1e1e1e',
  fg: '#fff',
};

export default Teams;