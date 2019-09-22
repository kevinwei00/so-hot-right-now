import React from 'react';
import EntryContext from '../../EntryContext';
import './EntryMaster.css';
import EntryList from './EntryList';
import EntrySelect from './EntrySelect';

export default function EntryMaster() {
  return (
    <EntryContext.Consumer>
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
    </EntryContext.Consumer>
  );
}
