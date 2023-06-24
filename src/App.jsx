import { Features, Footer, Home, How, Navbar } from "./components";

function App() {
  return (
    <div className=" overflow-x-hidden">
      <Navbar />

      <div className=" py-4 md:mt-16 mt-12 md:mb-40 mb-10 ">
        <Home />
      </div>

      <div className=" py-4">
        <Features />
      </div>

      <div className=" py-8">
        <How />
      </div>

      <div className=" py-10 bg-GrayishWhite mt-8">
        <Footer />
      </div>
    </div>
  );
}

export default App;
