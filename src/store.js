import { applyMiddleware, createStore, compose } from "redux";
import reduxThunk from "redux-thunk";
import reducer from './reducers'

const middleware = applyMiddleware(reduxThunk);
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const enhancer = compose(
  middleware,
  devTools
);

const store = createStore(reducer, enhancer)

export default store;