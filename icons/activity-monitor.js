import React from 'react';
import PropTypes from 'prop-types';

const ActivityMonitor = (props) => {
  const {
    size, bg, fg,
  } = props;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={size} height={size}>
      <circle fill={bg} cx="256" cy="256" r="256" />
      <path fillRule="evenodd" clipRule="evenodd" fill={fg} d="M258.149 297.752c.861-2.588 1.771-5.16 2.573-7.764 1.414-4.586 2.775-9.19 4.138-13.793 1.174-3.969 2.339-4.906 6.45-4.899 11.646.015 23.295-.032 34.94.155 4.252.066 6.977-1.653 9.061-5.266 8.39-14.559 16.913-29.039 25.401-43.542.889-1.515 1.87-2.977 3.064-4.869 1.11 1.878 2.057 3.345 2.87 4.882 7.648 14.46 15.329 28.903 22.863 43.424 1.886 3.632 4.294 5.268 8.599 5.215 19.381-.244 38.767-.105 58.147-.238 2.581-.018 3.391.721 3.249 3.285a171.705 171.705 0 0 0-.195 13.328c.052 2.277-.81 2.828-2.95 2.822-21.252-.062-42.505-.041-63.756-.033-2.489.002-4.98.033-7.467.109-3.416.104-5.629-1.473-7.188-4.49-4.244-8.215-8.634-16.352-12.976-24.515-.529-.997-1.115-1.964-1.891-3.325-1 1.357-1.863 2.344-2.526 3.451-4.695 7.859-9.477 15.674-13.97 23.65-2.14 3.797-5.016 5.344-9.318 5.256-10.399-.215-20.802-.195-31.206-.223-4.115-.01-5.553 1.164-6.816 5.336-7.365 24.332-14.713 48.668-22.106 72.99-.501 1.65-1.318 3.203-1.987 4.801l-.825-.029c-.299-1.121-.636-2.236-.89-3.367-7.503-33.297-15.002-66.596-22.495-99.896-3.474-15.435-6.937-30.873-10.405-46.312-.079-.346-.107-.724-.268-1.028-.269-.505-.626-.963-.945-1.44-.41.48-1.039.897-1.195 1.449-1.452 5.131-2.826 10.285-4.215 15.435-6.813 25.229-13.622 50.461-20.437 75.69-.274 1.016-.601 2.02-1.132 3.783-9.601-17.071-18.879-33.568-28.378-50.462-1.281 1.901-2.386 3.46-3.41 5.067-2.818 4.424-5.705 8.807-8.366 13.325-1.9 3.231-4.494 4.865-8.249 4.854-22.939-.059-45.881-.102-68.821-.088-1.916 0-2.429-.744-2.42-2.523.024-4.621.009-9.248-.21-13.861-.109-2.314.56-3.064 2.957-3.037 13.602.166 27.205.184 40.811.219 5.602.016 11.213-.267 16.801-.002 3.736.176 5.946-1.41 7.794-4.398 6.823-11.044 13.753-22.021 20.657-33.013.982-1.562 2.053-3.072 3.401-5.079l21.126 37.797 34.283-128.041 1.203-.043 35.585 159.248c.348.003.693.003 1.04.005z" />
    </svg>
  );
};

ActivityMonitor.propTypes = {
  size: PropTypes.number,
  bg: PropTypes.string,
  fg: PropTypes.string,
};

ActivityMonitor.defaultProps = {
  size: 512,
  bg: '#1e1e1e',
  fg: '#fff',
};

export default ActivityMonitor;
