import React,{Component} from "react";

import './App.css';
import RestaurantHome from "./components/Restaurant";
import DetailFood from "./components/FoodDetails";
import Div from "./components/Scroll";
import DivText from "./components/DivText";
import CategoryPage from "./components/Categories";
import Car from "./components/Carousel";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
// import Breadcrumbs from "./components/Breadcrumbs";
import Navbar from "./components/Navbar";
import Categorynav from "./components/Categorynav";
import Drag from "./components/Drag";
import Admindrag from "./components/Admindrag";
import TranslateLng from "./components/TranslateLng";
import Imagedrop from './components/Imagedrop'
class App extends React.Component {
    render(){
        return (
            <div >

                <Router>
                    {/*<Breadcrumbs/>*/}
                    <Switch>
                        <Route path={'/Image'} component={Imagedrop}/>
                        <Route path={'/FoodDetails'} component={DetailFood}/>
                        <Route path={'/Translate'} component={TranslateLng}/>
                        <Route path={'/Scroll'} component={Div}/>
                        <Route path={'/Admindrag'} component={Admindrag}/>
                        <Route path={'/DivText'} component={DivText}/>
                        <Route path={'/Categories'} component={CategoryPage}/>
                        <Route path={'/Carousel'} component={Car}/>
                        <Route path={'/Navbar'} component={Navbar}/>
                        <Route path={'/Drag'} component={Drag}/>
                        <Route path={'/CategoryNav'} component={Categorynav}/>
                        <Route path ={'/'} component={RestaurantHome}/>
                        {/*<Route path ={'/Image'} component={ImageUpload}/>*/}
                    </Switch>



                    {/*<RestaurantHome/>*/}
                </Router>


            </div>
        );
    }
  
}

export default App;
