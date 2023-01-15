
import Shop from "./components/Store";
import Products from "./components/Products";
import { BrowserRouter,  Route,  Routes } from "react-router-dom";
import Product from "./components/product";

import Nav from "./components/Nav";
function App() {
  return (
    <BrowserRouter>
   
<Shop>
<Nav />
<Routes>
<Route path="/" element={<Products/>}/>
<Route path="/product/:id" element={<Product />}/>
</Routes>
  
</Shop>

   
</BrowserRouter>
  );
}

export default App;
