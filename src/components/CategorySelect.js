import React from 'react';
import STORE from '../store';

function CategorySelect(props) {
  const allCategories = Object.keys(STORE);
  const categoryNames = allCategories.map((category) => {
    return (
      <option key={category} value={category}>
        {STORE[category].categoryName}
      </option>
    );
  });

  return (
    // select should be disabled during a fetch
    <div className="CategorySelect">
      <label htmlFor="Categories">Select a Category</label>
      <select
        className="CategorySelect__Categories"
        name="Categories"
        id="Categories"
        defaultValue={'DEFAULT'}
        onChange={(event) => props.handleChange(event.currentTarget.value)}
      >
        <option value="DEFAULT" disabled>
          Category
        </option>
        {categoryNames}
      </select>
    </div>
  );
}

export default CategorySelect;
