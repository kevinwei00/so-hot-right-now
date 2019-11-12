import React from 'react';
import EntryContext from '../../EntryContext';
import './EntryMaster.css';
import EntryList from './EntryList';
import EntrySelect from './EntrySelect';
import DocumentUtils from '../../utils/document-utils';

export default function EntryMaster() {
  DocumentUtils.scrollToTop();
  return (
    <EntryContext.Consumer>
      {({ allCategories, currentCategory, handleChange }) => (
        <section className="EntryMaster">
          <EntrySelect
            onChange={handleChange}
            allCategories={allCategories}
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
