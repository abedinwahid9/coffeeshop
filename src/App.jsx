import { Routes, Route } from "react-router-dom";

import "../src/style/app.css";
import MainLayout from "./component/MainLayout";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Itemrecipe from "./pages/Itemrecipe";

function App() {
  return (
    <>
      <MainLayout>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/itemrecipe" element={<Itemrecipe />} />
        </Routes>
      </MainLayout>
    </>
  );
}

export default App;
