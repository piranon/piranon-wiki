import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { apiMiddleware } from 'redux-api-middleware'
import { routerMiddleware } from 'react-router-redux'
import logger from 'redux-logger'
import rootReducer from '../reducers'

export default (history) => {
  const middlewares = [thunk, apiMiddleware, routerMiddleware(history)]

  if(process.env.NODE_ENV !== 'production') {
    middlewares.push(logger)
  }

  const store = createStore(
    rootReducer,
    applyMiddleware(...middlewares)
  )

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      System.import('../reducers').then(nextRootReducer =>
        store.replaceReducer(nextRootReducer.default)
      )
    })
  }

  return store
}