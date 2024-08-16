import Sidebar from "./components/Sidebar";
import Route from "./components/Route1";
import AccordionPage from "./pages/AccordionPage";
import DropdownPage from "./pages/DropdownPage";
import ButtonPage from "./pages/ButtonPage";
import ModelPage from "./pages/ModalPage";
import TablePage from "./pages/TablePage";
import CounterPage from "./pages/CounterPage";

function App() {
  return (
    <div className="flex mx-10 mt-4">
      <Sidebar className="w-full"/>
      <div className="col-span-5 mx-20">
        <Route path="/accordion">
          <AccordionPage />
        </Route>
        <Route path="/">
          <DropdownPage />
        </Route>
        <Route path="/buttons">
          <ButtonPage />
        </Route>
        <Route path="/modal">
          <ModelPage />
        </Route>
        <Route path={"/table"}>
          <TablePage />
        </Route>
        <Route path="/counter">
          <CounterPage initialCount={10}/>
        </Route>
      </div>
    </div>
  );
}

export default App;
