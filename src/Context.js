import React, { Component } from 'react'
import Contact from './components/Contact';

const Context=React.createContext();

const reducer=(state,action)=>{

    switch(action.type){
        case 'DELETE_CONTACT':
            return {
                ...state,
                contacts:state.contacts.filter(contact=> contact.id!==action.payload)
            }
        default :
            return state    
    }
}
export class Provider extends Component{
   state={ 
       contacts :[
        {
            id:1,
            name: 'Prithu paul',
            email:'prithu.paul@gmail.com',
            phoneNumber:'8697204495'

        },
        {
           id:2,
           name: 'Ananya paul',
           email:'ananya.paul@gmail.com',
           phoneNumber:'8697204495'

        }
    ],

    dispatch : action => this.setState(state=> reducer(state,action))

    
  }
  render(){
      return(
      <Context.Provider value={this.state}>
          {this.props.children}

      </Context.Provider>
      )
  }
}
export const Consumer=Context.Consumer;