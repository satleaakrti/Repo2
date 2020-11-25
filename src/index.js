   // Redux App
  import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import formAppReducer from './Examples/Assignment/FormAppReducer';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
//import ReduxApp from './Examples/Assignment/ReduxApp';
import TestRun from './Examples/Assignment/ReduxApp';
import thunk from 'redux-thunk';

// import FormApp from './Examples/Assignment/FormApp';
// for Assignment of redux
 const store = createStore(formAppReducer, applyMiddleware(thunk));


ReactDOM.render(
  <Provider store= {store}>
    <TestRun />
  </Provider>,
  document.getElementById('root')
); 

serviceWorker.unregister();  

// Redux Task- App Task
/* import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import AppReducer from './Examples/ReduxTask/AppReducer';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
//import ReduxApp from './Examples/Assignment/ReduxApp';
import TestRun from './Examples/ReduxTask/AppTask';
import thunk from 'redux-thunk';

// import FormApp from './Examples/Assignment/FormApp';
// for Assignment of redux
 const store = createStore(AppReducer, applyMiddleware(thunk));


ReactDOM.render(
  <Provider store= {store}>
    <TestRun />
  </Provider>,
  document.getElementById('root')
); 

serviceWorker.unregister();  */

// MiddleWareExmpl
/* import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import reducer from './Examples/MiddlewareExmpl/reducer';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
//import ReduxApp from './Examples/Assignment/ReduxApp';
import TestRun from './Examples/MiddlewareExmpl/AppExmpl';
import thunk from 'redux-thunk';

// import FormApp from './Examples/Assignment/FormApp';
// for Assignment of redux
 const store = createStore(reducer, applyMiddleware(thunk));


ReactDOM.render(
  <Provider store= {store}>
    <TestRun />
  </Provider>,
  document.getElementById('root')
); 

serviceWorker.unregister();  */

// ReduxFormAssignment - ReduxFornApp
/* import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import formReducer from './Examples/ReduxFormAssignment/FormReducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import TestRun from './Examples/ReduxFormAssignment/ReduxFormApp';

 const store = createStore(formReducer);


ReactDOM.render(
  <Provider store= {store}>
    <TestRun />
  </Provider>,
  document.getElementById('root')
); 

serviceWorker.unregister(); */

// for AppReduxFirst
/*import React from 'react';
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

// Login/Registration
/*import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './App';

ReactDOM.render( <App />, document.getElementById('root')); 

serviceWorker.unregister(); */

//Redux-Trigger - SignInForm
/* import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import SignInForm from "./Examples/ReduxTrigger/SignInForm";
import Button from "./Examples/ReduxTrigger/Button";

import reducer from "./Examples/ReduxTrigger/reducer";

const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Sign In To Your Account</h1>
        <SignInForm />
        <Button />
      </div>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement); */