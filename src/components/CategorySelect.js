import React from 'react';
import STORE from '../store';

function CategorySelect() {
  const allCategories = Object.keys(STORE);
  const categoryNames = allCategories.map((category, index) => {
    const categoryName = STORE[category].categoryName;
    return (
      <option key={`${index}:${categoryName}`} value={index}>
        {categoryName}
      </option>
    );
  });

  return (
    <div className="CategorySelect">
      <label htmlFor="Categories">Select a Category</label>
      <select
        className="CategorySelect__Categories"
        name="Categories"
        id="Categories"
      >
        {categoryNames}
      </select>
    </div>
  );
}

export default CategorySelect;
