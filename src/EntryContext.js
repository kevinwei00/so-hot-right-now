import React from 'react';

const EntryContext = React.createContext({
  currentCategory: null,
  handleChange: () => {},
});

export default EntryContext;
