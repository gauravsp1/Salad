import {Route,Switch} from "react-router"
import Home from "./Components/Home";
import Menu from "./Components/Menu";

function App() {


  return (
    <>
    <Home/>
    {/* <Switch>
    <Route exact path="https://gauravsp1.github.io/salad/menu" component={Menu} />
    <Route exact path="https://gauravsp1.github.io/salad/" component={Home} />
    </Switch> */}
    </>
  );
}

export default App;
