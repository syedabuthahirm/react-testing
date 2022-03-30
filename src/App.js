import { Switch, Route } from "react-router-dom";

import Counter from './pages/Counter';
import User from './pages/User';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" element={<Counter />} />
        <Route path="/users" element={<User />} />
      </Switch>
    </div>
  );
}

export default App;
