import React from 'react';

const Appwrapper = ({className, children}) => {
  return (
    <div className={className=== undefined ? 'container' : `container ${className}`}>
      {children}
    </div>
  );
};

export default Appwrapper;