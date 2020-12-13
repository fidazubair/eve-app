
import './App.css';
import RestaurantHome from "./components/Restaurant";
import DetailFood from "./components/FoodDetails";
import Div from "./components/Scroll";
import DivText from "./components/DivText";
import CategoryPage from "./components/Categories";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Breadcrumbs from "./components/Breadcrumbs";
function App() {
  return (
    <div >
  
        <Router>
            <Breadcrumbs/>
            <Switch>
                <Route path={'/FoodDetails'} component={DetailFood}/>
                <Route path={'/Scroll'} component={Div}/>
                <Route path={'/DivText'} component={DivText}/>
                <Route path={'/Categories'} component={CategoryPage}/>
                <Route path ={'/'} component={RestaurantHome}/>
            </Switch>



     {/*<RestaurantHome/>*/}
        </Router>
  
      
    </div>
  );
}

export default App;
