import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import { Login } from './components/Login';
import { MainScreen } from './pages/MainScreen';


function App() {
  return (
    <div className="App">
      
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/bank/*' element={<MainScreen/>}/>
                   
            </Routes>

      
      
      
      
      
      
        </BrowserRouter>
      

      
    </div>
  );
}

export default App;
