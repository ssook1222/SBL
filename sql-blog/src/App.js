import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Main from './components/main.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route exact path="/" element={<Main />} > </Route>
      </Routes>
    </BrowserRouter> 
  );
}

export default App;
