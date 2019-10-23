// SET_TEXT_FILTER
export const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});


export const sortByName = () => ({
  type: 'SORT_BY_NAME',  
});


export const sortByDate = () => ({
  type: 'SORT_BY_DATE',  
});