import "../src/style/app.css";
import MainLayout from "./component/MainLayout";
// import Home from "./pages/Home";
// import Signup from "./pages/Signup";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <MainLayout>
        {/* <Home /> */}
        {/* <Signup /> */}
        <Login />
      </MainLayout>
    </>
  );
}

export default App;
