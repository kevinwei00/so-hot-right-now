import React from 'react';
import PropTypes from 'prop-types';
import './EntrySelect.css';

export default function EntrySelect(props) {
  // TODO: select should be disabled during a fetch
  return (
    <div className="EntrySelect">
      <label className="EntrySelect__Label" htmlFor="Categories">
        What's hot right now in...
      </label>
      <select
        className="EntrySelect__Categories"
        name="Categories"
        id="Categories"
        defaultValue={props.currentCategory ? props.currentCategory : 'NO_SELECTION'}
        onChange={(event) => props.onChange(event.currentTarget.value)}
      >
        <option value="NO_SELECTION" disabled>
          Category
        </option>
        {props.allCategories.length > 0 &&
          props.allCategories.map((category) => {
            return (
              <option key={category.id} value={category.id}>
                {category.category_name}
              </option>
            );
          })}
      </select>
    </div>
  );
}

EntrySelect.propTypes = {
  currentCategory: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
