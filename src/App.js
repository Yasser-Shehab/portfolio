import { Header, Skills, Portfolio, Contact, Footer } from "./container/index";
import { Navbar } from "./components/index";
function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Portfolio />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
