import { Route, Routes } from 'react-router-dom';
import './App.css';
import Booking from './components/Booking/Booking';
import AuthProvider from './components/Context/AuthProvider';
import Home from './components/Home/Home';
import LogIn from './components/LogIn/LogIn';
import Nav from './components/Nav/Nav';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Room from './components/Room/Room';

function App() {
  return (

    <AuthProvider>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/room' element={<Room />} />
        <Route path='//booking/:title' element={<PrivateRoute>
          <Booking />
        </PrivateRoute>} />
        <Route path='/login' element={<LogIn />} />
      </Routes>

    </AuthProvider>
  );
}

export default App;
