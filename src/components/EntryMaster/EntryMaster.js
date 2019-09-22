import React from 'react';
import CategoryContext from '../../CategoryContext';
import './EntryMaster.css';
import EntryList from '../EntryList/EntryList';
import CategorySelect from '../CategorySelect/CategorySelect';

export default function EntryMaster() {
  return (
    <CategoryContext.Consumer>
      {({ currentCategory, handleChange }) => (
        <section className="EntryMaster">
          <CategorySelect
            onChange={handleChange}
            currentCategory={currentCategory}
          />
          {currentCategory && (
            <EntryList
              key={currentCategory}
              currentCategory={currentCategory}
            />
          )}
        </section>
      )}
    </CategoryContext.Consumer>
  );
}
