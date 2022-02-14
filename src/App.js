import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import SearchPage from './pages/SearchPage';
import React from 'react';
import Home from './pages/Home';

function App() {
  return(
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/search' element={
            <SearchPage />
          // <h1>My Search Engine</h1>
          } />
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}



// function App() {
//   return (
//     <div className="App">
//       <h1>Design a search page with search results </h1>
//       <Router>
//         <Routes>
//           <Route path='/search' element={<Home />} />
//             {/* <Search Page> */}
//           <Route path='/' element={<search />} />
//         </Routes>
//       </Router>
//     </div>
//   );
// }

export default App;
