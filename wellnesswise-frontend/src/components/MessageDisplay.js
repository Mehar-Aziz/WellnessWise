import React from 'react';
import PropTypes from 'prop-types';

const MessageDisplay = ({ message, type = 'info' }) => {
  if (!message) return null;

  const getStyle = () => {
    switch (type) {
      case 'success':
        return { backgroundColor: '#d4edda', color: '#155724', border: '1px solid #c3e6cb' };
      case 'error':
        return { backgroundColor: '#f8d7da', color: '#721c24', border: '1px solid #f5c6cb' };
      case 'warning':
        return { backgroundColor: '#fff3cd', color: '#856404', border: '1px solid #ffeeba' };
      default:
        return { backgroundColor: '#e9ecef', color: '#383d41', border: '1px solid #d6d8db' };
    }
  };

  const baseStyle = {
    padding: '10px',
    borderRadius: '4px',
    marginBottom: '15px',
    ...getStyle()
  };

  return (
    <div style={baseStyle} role="alert">
      {message}
    </div>
  );
};

MessageDisplay.propTypes = {
  message: PropTypes.string,
  type: PropTypes.oneOf(['info', 'success', 'error', 'warning'])
};

export default MessageDisplay;
