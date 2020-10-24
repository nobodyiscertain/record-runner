import React from 'react';

const Controls = ({ onFindRecordClick }) => {
  return (
    <>
      <button onClick={onFindRecordClick} >
        Find Record
      </button>
    </>
  );
}

export default Controls;
