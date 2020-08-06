import React from 'react';
import './App.css';
import GameStart from "./components/GameStart";
import { render } from '@testing-library/react';
import Rounds from './components/Rounds';
import {BrowserRouter as Router, Route} from "react-router-dom";
import PlayerNames from './components/PlayerNames';

// const routes = {
//   "/": () => <GameStart/>,
//   "/newGame": () => <Rounds/>,
// }

function App() {
  // const match = useRoutes(routes);
  return (
    <Router>
      <div className="App">
        {/* {match}  */}
        <Route exact path="/">
          <GameStart/>
        </Route>

        <Route path="/newGame">
          <Rounds/>
        </Route>
      </div>
    </Router>
  );
}

export default App;
