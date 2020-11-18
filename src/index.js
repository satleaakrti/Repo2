  import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import formAppReducer from './Examples/Assignment/FormAppReducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
//import ReduxApp from './Examples/Assignment/ReduxApp';
import TestRun from './Examples/Assignment/ReduxApp';

// import FormApp from './Examples/Assignment/FormApp';
// for Assignment of redux
 const store = createStore(formAppReducer);


ReactDOM.render(
  <Provider store= {store}>
    <TestRun />
  </Provider>,
  document.getElementById('root')
); 

serviceWorker.unregister();

// for AppReduxFirst
  /* import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TestRun from './Examples/ReduxExampleSecond/AppReduxFirst';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './Examples/ReduxExampleSecond/reducer';

 const store = createStore(reducer);


ReactDOM.render(
  <Provider store= {store}>
    <TestRun />
  </Provider>,
  document.getElementById('root')
);
serviceWorker.unregister() */

// for AppRedux
/* import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TestRun from './ReduxExampleFirst/AppRedux';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './ReduxExampleFirst/reducer';

 const store = createStore(reducer);


ReactDOM.render(
  <Provider store= {store}>
    <TestRun />
  </Provider>,
  document.getElementById('root')
);
serviceWorker.unregister() */

 /* import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App7';
//import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App appTitle="Person Manager" />, document.getElementById('root'));
registerServiceWorker();  */

// Section 9
/* import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import registerServiceWorker from './registerServiceWorker';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.request.use(request => {
    console.log(request);
    // Edit request config
    return request;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

axios.interceptors.response.use(response => {
    console.log(response);
    // Edit request config
    return response;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

ReactDOM.render( <App />, document.getElementById( 'root' ) );
serviceWorker.unregister(); */
