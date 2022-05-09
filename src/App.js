import logo from './logo.svg';
import './App.css';
import Header from './Pages/Shared/Header';
import {Routes,Route,Requi} from 'react-router-dom'
import Home from './Pages/Home/Home';
import Footer from './Pages/Shared/Footer';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import AddItems from './Pages/AddItems/AddItems';
import ManageProducts from './Pages/ManageProducts/ManageProducts';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Inventory from './Pages/Inventory/Inventory';
import Blog from './Pages/Shared/Blog';

function App() {
  return (
    <div>
    <Header></Header>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='/addItems' element={
      <RequireAuth>
        <AddItems></AddItems>
        </RequireAuth>} >
        </Route>

      <Route path='/manageProducts' element={
        <RequireAuth>
        <ManageProducts></ManageProducts>
        </RequireAuth>} >
      </Route>
      <Route path='/inventory/:productId' element={
        <RequireAuth>
       <Inventory></Inventory>
        </RequireAuth>} >
      </Route>

      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/register' element={<Register></Register>}></Route>
      <Route path='/blog' element={<Blog></Blog>}></Route>
    </Routes>
    <Footer></Footer>
    <ToastContainer/>
    </div>
  );
}

export default App;
