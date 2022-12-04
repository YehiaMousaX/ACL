import { BrowserRouter , Routes , Route} from 'react-router-dom'


// pages and components 
import Signup from './pages/signup'
import Header from './components/header';
//import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Header/>
      <Signup/>
    </div>
  );
}


export default App;
