import logo from './logo.svg';
import './App.css';
import AuthProvider from './Contexts/AuthProvider/AuthProvider';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Home from './Pages/Home/Home/Home';
import OrderInfo from './Pages/Home/OrderInfo/OrderInfo';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';

function App() {

  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route exact path="/" element={<Home />} />
            <Route path="/order/:id" element={<OrderInfo />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
