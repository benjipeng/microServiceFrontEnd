import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Mount function to start up the app "el" is some html element
const mount = (el) => {
  ReactDOM.render(<App />, el);
};

// If we are in development and in isolation,
// call mount immediately
if (process.env.NODE_ENV === 'development') { // see if it is in dev
  const devRoot = document.querySelector('#_marketing-dev-root');

  if (devRoot) {
    mount(devRoot);
  }
}

// We are running through container
// and we should export the mount function
export { mount };
