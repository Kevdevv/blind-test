import './App.css';
import BlindTest from './Pages/BlindTest';
import Landing from './Pages/Landing';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
<Router>
      <Routes>
        <Route path="/blind" element={<BlindTest />} />
        <Route path="/" element={<Landing />} />
      </Routes>
    </Router>
  );
}

export default App;
