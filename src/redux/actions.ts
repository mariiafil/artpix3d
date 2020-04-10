export const actionType = {
  SET_ORDER: 'SET_ORDER',
  SET_SEARCH_QUERY: 'SET_SEARCH_QUERY',
  SET_SORT_QUERY: 'SET_SORT_QUERY',
};

export const setOrder = (order: Order[]) => ({
  type: actionType.SET_ORDER,
  order,
});

export const setSearchQuery = (query: string) => ({
  type: actionType.SET_SEARCH_QUERY,
  query,
});

export const setSortQuery = (query: string) => ({
  type: actionType.SET_SORT_QUERY,
  query,
});
