import { Switch, Route } from "react-router-dom";

import Counter from './pages/Counter';
import User from './pages/User';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <Counter />
        </Route>
        <Route path="/users">
          <User />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
