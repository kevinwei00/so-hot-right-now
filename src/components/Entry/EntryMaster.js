import React from 'react';
import CategoryContext from '../../CategoryContext';
import './EntryMaster.css';
import EntryList from './EntryList';
import EntrySelect from './EntrySelect';

export default function EntryMaster() {
  return (
    <CategoryContext.Consumer>
      {({ currentCategory, handleChange }) => (
        <section className="EntryMaster">
          <EntrySelect
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
