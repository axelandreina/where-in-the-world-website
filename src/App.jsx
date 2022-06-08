import './App.css';
import Header from './components/Header';
import AllCountries from './components/AllCountries';
import Filter from './components/Filter';
import SearchBar from './components/SearchBar';


function App() {

  return (
    <>
      <Header/>
      <SearchBar/>
      <Filter />
      <AllCountries/>
    </>
  )
}

export default App
