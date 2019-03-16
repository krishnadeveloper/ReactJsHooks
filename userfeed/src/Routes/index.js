import React from "react";
import {BrowserRouter,Switch,Route} from "react-router-dom";
import Home from "../Components/Home";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";

const Routes = () =>{
    return(
        <React.Fragment>
            <Header/>
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={Home} />
                </Switch>
            </BrowserRouter>
            <Footer/>
        </React.Fragment>
    )
}
 
export default Routes;