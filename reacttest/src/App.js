import React from "react"
import Navigationbar from "./components/Navigationbar"
import Dashboard from "./components/Dashboard"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Login from "./components/Login"
import Store from './components/Store'

class App extends React.Component{
    render(){
        return(
            <Router>
            <div>
                <Navigationbar/>
                <Switch>       
                    <Route exact path = "/">
                    <Store>
                        <Dashboard/>
                    </Store>
                    </Route>
                    <Route exact path = "/login" component = {Login}/>
                </Switch>
            </div>
            </Router>

        )
    }   
}
export default App;