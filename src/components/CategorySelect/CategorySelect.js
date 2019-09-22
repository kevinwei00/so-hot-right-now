import React from 'react';
import PropTypes from 'prop-types';
import './CategorySelect.css';
import STORE from '../../store';

export default function CategorySelect(props) {
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
      <label className="CategorySelect__Label" htmlFor="Categories">
        What's hot right now in...
      </label>
      <select
        className="CategorySelect__Categories"
        name="Categories"
        id="Categories"
        defaultValue={
          props.currentCategory ? props.currentCategory : 'NO_SELECTION'
        }
        onChange={(event) => props.onChange(event.currentTarget.value)}
      >
        <option value="NO_SELECTION" disabled>
          Category
        </option>
        {categoryNames}
      </select>
    </div>
  );
}

CategorySelect.propTypes = {
  currentCategory: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
