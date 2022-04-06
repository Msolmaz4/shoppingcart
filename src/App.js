import {BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import React from 'react';
import Header from './componnet/Header';

import {DataProvider}  from  './componnet/Context'
function App() {
  return (
    <DataProvider>
<Router>
    <div>

<Header/>

    </div>
    </Router>


    </DataProvider>
    
  );
}

export default App;
