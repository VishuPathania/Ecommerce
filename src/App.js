import { lazy,Suspense } from "react";
import { useContext, useState } from "react";
 import Header from "./components/Header";
 import CartList from "./components/CartList";

 import "./App.css";
 import { Routes, Route, Switch } from "react-router-dom";


 import Login from "./components/pages/Login";
// import ProductDetail from "./components/pages/ProductDetails";
 import AuthContext from "./components/store/AuthContext";
 import Footer from "./components/Footer/Footer";
import SignUp from "./components/pages/SignUp";

const Home = lazy(()=>import("./components/pages/Home"))
const Store = lazy(()=>import("./components/pages/Store"))
const About = lazy(()=>import("./components/pages/About"))
const ContactUs = lazy(()=>import("./components/pages/ContactUs"))
const ProductDetail = lazy(()=>import( "./components/pages/ProductDetails"))
//const Login = lazy(()=>import("./components/pages/Home"))

const App = () => {
  const authCtx = useContext(AuthContext)
  const [showCart, setShowCart] = useState(false);


  const handleShow = (value) => {
    setShowCart(value);
  };

  return (
    <div>
      <Header handleShow={handleShow} />


        <Routes>
          <Route path="/home" element={<Suspense><Home /></Suspense>} />
          <Route path="store" element={<Suspense>{showCart ? <CartList /> : <Store />}</Suspense>} />
          <Route path="about" element={<Suspense><About /></Suspense>} />
          <Route path="ContactUs" element={<Suspense><ContactUs /></Suspense>} />
          {<Route path="/product/:id" element={<Suspense><ProductDetail /></Suspense>} />}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        <Footer/>
     
    </div>
  );
};

export default App;
