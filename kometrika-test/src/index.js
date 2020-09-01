import React from "react";
import ReactDOM from "react-dom";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

import reducer from "./store/reducer/reducer";
import starshipsReducer from "./store/reducer/starships/starships";

import "./index.scss";

const rootReducer = combineReducers({
  //here we define different areas of the app and apply reducers to them
  starships: starshipsReducer,
  comparison: reducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  /* preloadedState, */ composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
