// define constant
const CHECK_STATUS = 'bookstore/categories/CHECK_STATUS';

const categories = [];
export const categoriesReducer = (state = categories, action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under construction';
    default:
      return state;
  }
};

export const checkBookStatus = () => ({
  type: CHECK_STATUS,

});
