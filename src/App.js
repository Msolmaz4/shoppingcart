import {BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import Header from './componnet/Header';
import Section from './componnet/Section';
import {DataProvider}  from  './componnet/Context'
function App() {
  return (
    <DataProvider>
<Router>
    <div>

<Header/>
<Section/>
    </div>
    </Router>


    </DataProvider>
    
  );
}

export default App;
