import { BrowserRouter, Routes, Route } from 'react-router';
import Home from './pages/Home';
import Snippets from './layout/Snippets';
import Php from './pages/Php';
import Sql from './pages/Sql';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<Snippets />}>
          <Route path="/php" element={<Php />} />
          <Route path="/sql" element={<Sql />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
