import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import store from "./redux/store"
import router from "./route/index"

import 'bootstrap/dist/css/bootstrap.min.css'
import './custom.css'

ReactDOM.render(
  (<Provider store={store}>
    {router}
  </Provider>)
  , document.getElementById('root')
);

