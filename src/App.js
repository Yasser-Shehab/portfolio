import { Header, Skills, Portfolio, Contact, Footer } from "./container/index";
import { Navbar } from "./components/index";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Portfolio />
      <Skills />
      <Contact />
      <Footer />
      <ToastContainer className="toaster-style toaster-custom-font" />
    </>
  );
}

export default App;
