import React from 'react';

const AppWrapper = ({className, children}) => {
  return (
    <div className={className=== undefined ? 'container' : `container ${className}`}>
      {children}
    </div>
  );
};

export default AppWrapper;