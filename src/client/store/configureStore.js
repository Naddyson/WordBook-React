import { createStore, applyMiddleware, combineReducers } from 'redux'
import rootReducer from '../reducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import { routerReducer } from 'react-router-redux'


export default function configureStore() {
	const reducers = combineReducers({ rootReducer, router: routerReducer })
  const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk,promise())))

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers')
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
