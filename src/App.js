import {BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import Header from './componnet/Header';
import Section from './componnet/Section';

function App() {
  return (
    <Router>
    <div>

<Header/>
<Section/>
    </div>
    </Router>
  );
}

export default App;
