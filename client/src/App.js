import {Routes,BrowserRouter,Route,Navigate} from "react-router-dom"
import Home from "./pages/home/Home";
import Topbar from "./components/topbar/Topbar";
import Products from "./pages/products/Products";
import ProductPage from "./pages/productPage/ProductPage";
import Cart from "./pages/cart/Cart";
import CheckoutSuccess from "./pages/checkoutSuccess/CheckoutSuccess";
import NotFound from "./pages/notFound/NotFound";
import Login from "./pages/Login/Login";
import Register from "./pages/register/Register";
import { useSelector } from "react-redux";


function App() {
  const user = useSelector((state)=>state.user.currentUser)
  
  return (
    <div className="App">
     <BrowserRouter>
     <Topbar/>
     <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/login' element={user?<Navigate to='/'/>:<Login/>}/>
      <Route exact path='/register' element={<Register/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/products/:id' element={<ProductPage/>}/>
      <Route path='/cart' element={user?<Cart/>:<Navigate to='/login'/>}/>
      <Route path='/checkout-success' element={<CheckoutSuccess/>}/>
      <Route path="*" element={<NotFound/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
