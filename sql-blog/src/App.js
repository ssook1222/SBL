import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Main from './view/main.jsx'
import DB_basic from './view/database_basic.jsx';
import SQL_query from './view/query_solve.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route exact path="/" element={<Main />} > </Route>
          <Route exact path="/db-basic" element={<DB_basic />} > </Route>
          <Route exact path="/sql-query" element={<SQL_query />} > </Route>
      </Routes>
    </BrowserRouter> 
  );
}

export default App;
