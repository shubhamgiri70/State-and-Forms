import Cart from "./components/Cart";
import Header from "./components/Header";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import data from "../src/data.json";

function App() {
  return (
    <>
      <Header />
      <section className="flex">
        <Sidebar products={data.products} />
        <Main products={data.products} />
      </section>
      {/* <Cart /> */}
    </>
  );
}

export default App;
