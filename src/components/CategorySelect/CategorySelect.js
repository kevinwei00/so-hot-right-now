import React from 'react';
import './CategorySelect.css';
import STORE from '../../store';

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
    // TODO: select should be disabled during a fetch
    <div className="CategorySelect">
      <label className="CategorySelect__Label" htmlFor="Categories">What's hot right now in...</label>
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
