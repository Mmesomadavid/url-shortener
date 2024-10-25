import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from '../src/pages/Signup';
import Login from '../src/pages/Login';
import Home from '../src/pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Page Route */}
        <Route path="/" element={<Home />} />

        {/* Login Page Route */}
        <Route path="/login" element={<Login />} />

        {/* SignUp Page Route */}
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
