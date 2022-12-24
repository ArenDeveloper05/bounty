import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route  path='/' element={< HomePage />}></Route>
        {/* <Route  path='/login' element={< About />}></Route>
        <Route  path='/sign-up' element={< Contact />}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
