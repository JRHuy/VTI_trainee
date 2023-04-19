import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Search from './search';
import Details from './components/Details';

function App() {
  return (
    // <div className="App">
    //   <Search />
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path='/details/:playerID' element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
