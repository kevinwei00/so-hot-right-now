import React from 'react';

function CategorySelect() {
  const categories = [1, 2, 3].map((category, index) => {
    return (
      <option key={index} value={''}>
        {category.toString()}
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
        {categories}
      </select>
    </div>
  );
}

export default CategorySelect;
