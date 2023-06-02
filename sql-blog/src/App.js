import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Main from './view/main.jsx'
import DB_basic from './view/database_basic.jsx';
import SQL_query from './view/query_solve.jsx'
import Academy from './view/alice_academy.jsx'

// 포스팅 폼
import JanFirst from './view/qs_jan/qs_post_first.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route exact path="/" element={<Main />} > </Route>
          <Route exact path="/db-basic" element={<DB_basic />} > </Route>
          <Route exact path="/sql-query" element={<SQL_query />} > </Route>
          <Route exact path="/academy" element={<Academy />} > </Route>

          <Route exact path="/jan-first" element={<JanFirst />} > </Route>
      </Routes>
    </BrowserRouter> 
  );
}

export default App;
