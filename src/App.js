import { Routes, Route } from "react-router-dom";

import Counter from './pages/Counter';
import User from './pages/User';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/users" element={<User />} />
      </Routes>
    </div>
  );
}

export default App;
