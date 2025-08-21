import { BrowserRouter, Routes, Route } from 'react-router';
import Home from './pages/Home';
import Php from './pages/Php';
import Sql from './pages/Sql';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/php" element={<Php />} />
        <Route path="/sql" element={<Sql />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
