import Header from "./Components/Containers/Header";
import ProductCard from "./Components/Containers/[ Container ]productCard";
import DesignSystem from "./Components/DesignSystem";
import ProductDataForm from "./Components/Helper/product_data_form";
import HomeScreen from "./Components/HomeScreen";
import ItemViewScreen from "./Components/ItemViewScreen";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route path='/home-page' component={HomeScreen} exact></Route>
          <Route path='/item-view-page/:product' component={ItemViewScreen} exact></Route>
          <Route path='/' component={HomeScreen} exact></Route>
          <Route path='/product-add' component={ProductDataForm} exact></Route>



        </Switch>
      </Router>



      {/* <ProductDataForm /> */}
      {/* <DesignSystem /> */}
      {/* <ProductCard /> */}
    </div>
  );
}

export default App;
