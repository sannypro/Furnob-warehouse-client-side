
import './App.css';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import { ToastContainer } from 'react-toastify';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import SingleProduct from './components/SingleProduct/SingleProduct';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/inventory/:inventoryId' element={<PrivateRoute><SingleProduct></SingleProduct></PrivateRoute>}></Route>
      </Routes>
      <ToastContainer />
    </div >
  );
}

export default App;
