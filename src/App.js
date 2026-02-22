import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import { Users } from './routes/Users';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <nav>
        <Link to="/users">Users</Link>
      </nav>

      <Routes>
        <Route path="/users" element={<Users />} />
      </Routes>
    </>
  );
}

export default App;