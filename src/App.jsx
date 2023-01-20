
import Shop from "./components/Store";
import Products from "./components/Products";
import { BrowserRouter,  Route,  Routes } from "react-router-dom";
import Product from "./components/product";

import Nav from "./components/Nav";
import Cart from "./components/Cart";
function App() {
  return (
    <BrowserRouter>
   
<Shop>
<Nav />
<Routes>
<Route path="/" element={<Products/>}/>
<Route path="/product/:id" element={<Product />}/>
<Route path="/cart" element={<Cart />}/>
</Routes>
  
</Shop>

   
</BrowserRouter>
  );
}

export default App;
