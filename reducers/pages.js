const pages = (state = [], action) => {
  switch(action.type) {
    case 'RECEIVE_PAGES':
      return action.pages
    default:
      return state
  }
}

export default pages