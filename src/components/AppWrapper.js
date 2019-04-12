import React from 'react';

const Appwrapper = ({className, children}) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

export default Appwrapper;