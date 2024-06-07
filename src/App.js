import logo from './logo.svg';
import './App.css';
import AddStudent from './components/AddStudent';
import SearchStudent from './components/SearchStudent';
import DeleteStudent from './components/DeleteStudent';
import ViewAll from './components/ViewAll';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Add' element={<AddStudent/>}/>
      <Route path='/Search' element={<SearchStudent/>}/>
      <Route path='/Delete' element={<DeleteStudent/>}/>
      <Route path='/ViewAll' element={<ViewAll/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;

