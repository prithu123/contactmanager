import React, { Component } from 'react'

const Context=React.createContext();
export class Provider extends Component{
   state={ contacts :[
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
    ]
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