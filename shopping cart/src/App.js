import Cart from "./components/Cart";
import Header from "./components/Header";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <Header />
      <section className="flex">
        <Sidebar />
        <Main />
      </section>
      {/* <Cart /> */}
    </>
  );
}

export default App;
