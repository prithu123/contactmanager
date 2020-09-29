import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Contacts from './components/contact/Contacts'
import AddContact from './components/contact/AddContact'
import Header from './components/layout/Header'
import About from './components/pages/About'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Provider} from './Context'
import NotFound from './components/pages/NotFound'

 class App extends Component {

  render() {
    return (
      
      <Provider>
        <Router>
        <div className='App'>
              <Header branding ="Contact Manager "/>
              <div className='container'>
               <Switch>
                 <Route exact path='/' component={Contacts}></Route>
                 <Route exact path='/contact/add' component={AddContact}></Route>
                 <Route exact path='/about' component={About}></Route>
                 <Route  component={NotFound}></Route>


                 
               </Switch>
              </div>
        </div>
        </Router>
      </Provider>
    )
  }
}
export default App