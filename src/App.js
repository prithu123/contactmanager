import React, { Component } from 'react'
import Contacts from './components/contact/Contacts'
import AddContact from './components/contact/AddContact'
import Header from './components/layout/Header'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Provider} from './Context'

 class App extends Component {

  render() {
    return (
      
      <Provider>
        <div className='App'>
              <Header branding ="Contact Manager "/>
              <div className='container'>
                <AddContact/>
               <Contacts/>
              </div>
        </div>
      </Provider>
    )
  }
}
export default App