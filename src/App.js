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
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import AddReview from './Pages/Dashboard/AddReview/AddReview';
import MakeAdmin from './Pages/Dashboard/MakeAdmin/MakeAdmin';
import MyOrders from './Pages/Dashboard/MyOrders/MyOrders';
import ManageAllOrders from './Pages/Dashboard/ManageAllOrders/ManageAllOrders';
import Payment from './Pages/Dashboard/Payment/Payment';
import AddMeal from './Pages/Dashboard/AddMeal/AddMeal';
import ManageMeals from './Pages/Dashboard/ManageMeals/ManageMeals';
import AdminRoute from './Pages/Dashboard/AdminRoute/AdminRoute';
import ExploreMore from './Pages/Explore More/ExploreMore';

function App() {

  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Home />} />
            <Route path="/order/:id" element={<OrderInfo />} />
            <Route path="/exploreMore" element={<ExploreMore />} />
            <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} >
              <Route path='/dashboard' element={<MyOrders></MyOrders>} />

              <Route path={`/dashboard/myOrders`} element={<MyOrders />} />

              <Route path={`/dashboard/addReview`} element={<AddReview />} />


              <Route path={`/dashboard/addMeal`} element={<AdminRoute><AddMeal /></AdminRoute>} />

              <Route path={`/dashboard/manageAllOrders`} element={<AdminRoute><ManageAllOrders /></AdminRoute>} />

              <Route path={`/dashboard/manageMeals`} element={<AdminRoute><ManageMeals /></AdminRoute>} />
              <Route path={`/dashboard/makeAdmin`} element={<AdminRoute><MakeAdmin /></AdminRoute>} />

              <Route path={`/dashboard/payment`} element={<Payment />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
