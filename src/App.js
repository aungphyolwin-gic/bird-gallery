import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Birds from "./Birds";

import { NavBar } from "./NavBar";
import BirdDetail from "./BirdDetail";
import Main from './Main';

function App() {
  return (
    <Router>
      <div className="App bg-black">
        <NavBar />
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <Route exact path="/birds">
              <Birds />
            </Route>
            <Route path="/birds/:id">
              <BirdDetail />
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
