import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import { Users } from './routes/Users';
import { Form } from './routes/form';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <nav className='d-flex gap-3'>
        <Link to="/users">Users</Link>
        <Link to='/userform'>UserForm</Link>
      </nav>

      <Routes>
        <Route path="/users" element={<Users />} />
        <Route path='/userform' element={<Form />} />
      </Routes>
    </>
  );
}

export default App;