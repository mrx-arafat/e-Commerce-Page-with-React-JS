import "./App.css";
import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";
import react from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import OrderReview from "./components/OrderReview/OrderReview";
import Inventory from "./components/Inventory/Inventory";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route path="/shop">
            <Shop></Shop>
          </Route>
          <Route exact path="/">
            <Shop></Shop>
          </Route>
          <Route path="/review">
            <OrderReview></OrderReview>
          </Route>
          <Route path="/inventory">
            <Inventory></Inventory>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
