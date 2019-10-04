import React from 'react';
import PropTypes from 'prop-types';
import './EntrySelect.css';
import STORE from '../../store';

export default function EntrySelect(props) {
  const allCategories = Object.keys(STORE);
  const categoryNames = allCategories.map((category) => {
    return (
      <option key={category} value={category}>
        {STORE[category].categoryname}
      </option>
    );
  });

  return (
    // TODO: select should be disabled during a fetch
    <div className="EntrySelect">
      <label className="EntrySelect__Label" htmlFor="Categories">
        What's hot right now in...
      </label>
      <select
        className="EntrySelect__Categories"
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

EntrySelect.propTypes = {
  currentCategory: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
