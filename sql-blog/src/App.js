import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Main from './view/main.jsx'
import DB_basic from './view/database_basic.jsx';
import SQL_query from './view/query_solve.jsx'
import Academy from './view/alice_academy.jsx'
import Others from './view/others.jsx';

// recommend 폼

import Cert from './view/recommend/certfi.jsx'

// 포스팅 폼
import JanFirst from './view/qs_jan/qs_post_first.jsx'
import JanSecond from './view/qs_jan/qs_post_second.jsx'
import JanThird from './view/qs_jan/qs_post_third.jsx'
import JanFourth from './view/qs_jan/qs_post_fourth.jsx'
import JanFifth from './view/qs_jan/qs_post_fifth.jsx'

import FabThird from './view/qs_fab/qs_post_third.jsx'

import MarchFirst from './view/qs_march/qs_post_first.jsx'

import AprilFirst from './view/qs_april/qs_post_first.jsx'
import AprilThird from './view/qs_april/qs_post_third.jsx'

import MayFirst from './view/qs_may/qs_post_first.jsx'

import JuneFirst from './view/qs_june/qs_post_first.jsx'
import JuneSecond from './view/qs_june/qs_post_second.jsx'

//db_basic 폼
import Ch3 from './view/db_basic/ch3.jsx'
import Ch4 from './view/db_basic/ch4.jsx'
import Ch6 from './view/db_basic/ch6.jsx'
import Ch7 from './view/db_basic/ch7.jsx'
import Ch8 from './view/db_basic/ch8.jsx'
import Ch9 from './view/db_basic/ch9.jsx'
import Ch10 from './view/db_basic/ch10.jsx'
import Ch11 from './view/db_basic/ch11.jsx'
import Ch12 from './view/db_basic/ch12.jsx'
import Ch13 from './view/db_basic/ch13.jsx'
import Ch14 from './view/db_basic/ch14.jsx'
import Ch15 from './view/db_basic/ch15.jsx'

//Alice Academy 폼
import AA1 from './view/alice_academy/first_story.jsx'
import AA2 from './view/alice_academy/second_story.jsx'
import AA3 from './view/alice_academy/third_story.jsx'
import AA4 from './view/alice_academy/fourth_story.jsx'

import RssFeed from './view/rss_feed.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route exact path="/" element={<Main />} > </Route>
          <Route exact path="/db-basic" element={<DB_basic />} > </Route>
          <Route exact path="/sql-query" element={<SQL_query />} > </Route>
          <Route exact path="/academy" element={<Academy />} > </Route>
          <Route exact path="others" element={<Others />} > </Route>


          <Route exact path="/cert" element={<Cert />} > </Route>

          <Route exact path="/ch3" element={<Ch3 />} > </Route>
          <Route exact path="/ch4" element={<Ch4 />} > </Route>
          <Route exact path="/ch6" element={<Ch6 />} > </Route>
          <Route exact path="/ch7" element={<Ch7 />} > </Route>
          <Route exact path="/ch8" element={<Ch8 />} > </Route>
          <Route exact path="/ch9" element={<Ch9 />} > </Route>
          <Route exact path="/ch10" element={<Ch10 />} > </Route>
          <Route exact path="/ch11" element={<Ch11 />} > </Route>
          <Route exact path="/ch12" element={<Ch12 />} > </Route>
          <Route exact path="/ch13" element={<Ch13 />} > </Route>
          <Route exact path="/ch14" element={<Ch14 />} > </Route>
          <Route exact path="/ch15" element={<Ch15 />} > </Route>

          <Route exact path="/jan-first" element={<JanFirst />} > </Route>
          <Route exact path="/jan-second" element={<JanSecond />} > </Route>
          <Route exact path="/jan-third" element={<JanThird />} > </Route>
          <Route exact path="/jan-fourth" element={<JanFourth />} > </Route>
          <Route exact path="/jan-fifth" element={<JanFifth />} > </Route>

          <Route exact path="/fab-third" element={<FabThird />} > </Route>

          <Route exact path="/march-first" element={<MarchFirst />} > </Route>

          <Route exact path="/april-first" element={<AprilFirst />} > </Route>
          <Route exact path="/april-third" element={<AprilThird />} > </Route>

          <Route exact path="/may-first" element={<MayFirst />} > </Route>

          <Route exact path="/june-first" element={<JuneFirst />} > </Route>
          <Route exact path="/june-second" element={<JuneSecond />} > </Route>

          <Route exact path="/aa1" element={<AA1 />} > </Route>
          <Route exact path="/aa2" element={<AA2 />} > </Route>
          <Route exact path="/aa3" element={<AA3 />} > </Route>
          <Route exact path="/aa4" element={<AA4 />} > </Route>

          <Route exact path="/rss-feed" element={<RssFeed />}></Route>

      </Routes>
    </BrowserRouter> 
  );
}

export default App;
