import React, {Component} from 'react';
import './App.css';
import 'primereact/resources/themes/rhea/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import {Sidebar} from 'primereact/sidebar';
import {Menu} from 'primereact/menu';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';

import Home from './Home';
import About from './About';
import Logout from './Logout';
import mbLogo from './images/mbLogo.webp'


class App extends Component{

    constructor() {
        super();
        this.state = {
            items:[
                {
                    label:'Home',
                    icon:'pi pi-home',
                    command: () => {window.location = "#/"}
                },
                {
                    label:'About',
                    icon:'pi pi-info',
                    className: "p-menuitem-active",
                    command: () => {window.location = "#/about"}
                },
                {
                    label:'Logout',
                    icon:'pi pi-power-off',
                    command: () => {window.location = "#/logout"}
                }

            ]
        };
    }

    render()
    {
        return (
            <Router>
                <div className="App" >
                    <Sidebar position="left" visible={true} showCloseIcon={false} dismissable={false} modal={false}
                             style={{padding:0, width:'175px'}}>
                        <Menu model={this.state.items}
                              style={{width: '100%', height:'100%', marginTop:'60px'}}/>
                    </Sidebar>
                    <Sidebar style={{height:'65px', backgroundColor:'black'}} position="top" visible={true} showCloseIcon={false} dismissable={false} modal={false}>
                        <div style={{textAlign:'center'}}>
                        <img style={{float: 'left', height: '45px'}}src={mbLogo} alt="mbLogo"/>
                            <h2 style={{color:'#900C3F', margin:'0px', fontFamily: "Arial, Helvetica, sans-serif"}}>MurderBook</h2>
                            <h3 style={{color:'white', marginTop: '2px'}}>React Native Application Overview</h3>
                        </div>
                    </Sidebar>
                    <div style={{marginLeft:"175px", padding:'15px'}}>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/about" component={About} />
                            <Route path="/logout" component={Logout} />
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;