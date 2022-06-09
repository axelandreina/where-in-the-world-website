import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import {CountryDetail} from './components/CountryDetail';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Home/>}></Route>
          <Route path='/country/:name' element={<CountryDetail/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
