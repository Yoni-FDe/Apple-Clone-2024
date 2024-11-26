import React from "react";
import "../src/assets/css/bootstrap.css";
import Main from "./components/Main/Main";
// import Footer from "./components/Footer/Footer";
import Mac from "./Pages/Mac/Mac";
import Iphone from "./Pages/Iphone/Iphone";
import Ipad from "./Pages/Ipad/Ipad";
import Watch from "./Pages/Watch/Watch";
import TV from "./Pages/TV/TV";
import Music from "./Pages/Music/Music";
import Support from "./Pages/Support/Support";
import Cart from "./Pages/Cart/Cart";

import Four04 from "./Pages/Four04/Four04";

import SharedLayout from "./components/SharedLayout/SharedLayout";
import ProductPage from "./Pages/Productpage/Productpage";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
  
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Main />} />
          <Route path="mac" element={<Mac />} />
          <Route path="ipad" element={<Ipad />} />
          <Route path="watch" element={<Watch />} />
          <Route path="tv" element={<TV />} />
          <Route path="music" element={<Music />} />
          <Route path="support" element={<Support />} />
          <Route path="cart" element={<Cart />} />
          <Route path="*" element={<Four04 />} />
          <Route path="iphone" element={<Iphone />} />
          <Route path="iphone/:pID" element={<ProductPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
