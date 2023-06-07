import React from 'react';

function Brush({ handleUtensil }) {
  const handleWeightChange = (event) => {
    const weight = event.target.value;
    handleUtensil(weight, 'weight');
  };

  return (
    <>
      <select onChange={handleWeightChange} id="brush-detail">
        <option value="thin">Thin</option>
        <option value="normal">Normal</option>
        <option value="thick">Thick</option>
      </select>
    </>
  );
}

export default Brush;

