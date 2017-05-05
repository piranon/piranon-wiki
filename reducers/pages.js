const pages = (state = [], action) => {
  switch(action.type) {
    case 'LOAD_PAGES_SUCCESS':
      return action.payload
    case 'LOAD_PAGE_SUCCESS':
      return [action.payload]
    default:
      return state
  }
}

export default pages