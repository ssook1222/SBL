import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Main from './view/main.jsx'
import DB_basic from './view/database_basic.jsx';
import SQL_query from './view/query_solve.jsx'
import Academy from './view/alice_academy.jsx'

// recommend 폼

import Cert from './view/recommend/certfi.jsx'

// 포스팅 폼
import JanFirst from './view/qs_jan/qs_post_first.jsx'
import JanSecond from './view/qs_jan/qs_post_second.jsx'
import JanThird from './view/qs_jan/qs_post_third.jsx'

//db_basic 폼
import Ch10 from './view/db_basic/ch10.jsx'
import Ch11 from './view/db_basic/ch11.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route exact path="/" element={<Main />} > </Route>
          <Route exact path="/db-basic" element={<DB_basic />} > </Route>
          <Route exact path="/sql-query" element={<SQL_query />} > </Route>
          <Route exact path="/academy" element={<Academy />} > </Route>

          <Route exact path="/cert" element={<Cert />} > </Route>

          <Route exact path="/ch10" element={<Ch10 />} > </Route>
          <Route exact path="/ch11" element={<Ch11 />} > </Route>

          <Route exact path="/jan-first" element={<JanFirst />} > </Route>
          <Route exact path="/jan-second" element={<JanSecond />} > </Route>
          <Route exact path="/jan-third" element={<JanThird />} > </Route>

      </Routes>
    </BrowserRouter> 
  );
}

export default App;
