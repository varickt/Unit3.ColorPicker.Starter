import React, { useState } from 'react';
import Color from './Color'; // Adjust the path if necessary

const Picker = () => {
  const [selectedColor, setSelectedColor] = useState(""); // Initial state

  return (
    <div>
      {/* Navbar displaying the selected color */}
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      
      {/* List of colors to select */}
      <div id="colors-list">
        <Color color="yellow" setSelectedColor={setSelectedColor} />
        <Color color="green" setSelectedColor={setSelectedColor} />
        <Color color="black" setSelectedColor={setSelectedColor} />
      </div>
    </div>
  );
};

export default Picker;
