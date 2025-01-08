import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Body from "./Components/Body";
import About from "./Components/About";
import Treks from "./Components/Treks";
import Kedarkantha from "./Components/Kedarkantha";

const AppLayout = () => {
  return (
    <div>
      <Body />
      <Treks />
      <About />
    </div>
  );
};

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<AppLayout />}></Route>
          <Route path="/kedarkantha" element={<Kedarkantha />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
