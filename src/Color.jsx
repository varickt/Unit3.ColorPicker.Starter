import React from 'react';

const Color = ({ color, setSelectedColor }) => {
  return (
    // Each div will have a background color that corresponds to the passed color prop
    <div 
      className={color} 
      onClick={() => setSelectedColor(color)}
      style={{
        width: '100px', 
        height: '100px', 
        backgroundColor: color, 
        margin: '10px', 
        cursor: 'pointer',
      }}
    >
    </div>
  );
};

export default Color;
