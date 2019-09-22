import React from 'react';

const CategoryContext = React.createContext({
  currentCategory: null,
  handleChange: () => {},
});

export default CategoryContext;