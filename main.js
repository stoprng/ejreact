import React from 'react';  
import ReactDOM from 'react-dom';  
import App from './App';  
  
const queryString =  window.location.search;
const urlParams = new URLSearchParams(queryString);   
alert(queryString);

ReactDOM.render(<App acctId={queryString}/>, document.getElementById('app'));  