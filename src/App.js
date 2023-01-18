import { Routes, Route } from 'react-router-dom'
import NotFound from './pages/404';
import GDPR from './pages/gdpr';
import Home from './pages/home';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/gdpr' element={<GDPR/>}/>
      <Route path='/404' element={<NotFound/>}/>
    </Routes>
  );
}

export default App;
