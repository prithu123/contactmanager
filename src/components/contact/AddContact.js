import React, { Component } from 'react'
import {Consumer} from '../../Context'
import {v4 as uuid} from 'uuid';

 class AddContact extends Component {

     state={
         name:'',
         email:'',
         phone:''
     }
     onChange=e =>this.setState({[e.target.name]:e.target.value})

     onSubmit= (dispatch,e) =>{
         e.preventDefault();
         const{name,email,phone} = this.state

         const newContact={
            id: uuid(),
            name,
            email,
            phone
        }
        dispatch({type:"ADD_CONTACT", payload:newContact})
        this.setState({name:'',email:'',phone:''})
     }

    render() {
        const{name,email,phone} = this.state

        
        return(
            <Consumer>
             {
             value=>{
                 const{dispatch}=value
return (
    <div className='card mb-3'>
        <div className='card-header'> Add Contact</div>
        <div className='card-body'>
        <form onSubmit={this.onSubmit.bind(this,dispatch)}>
            <div className='form-group'>
                <label htmlFor='name'>Name</label>
                <input
                type='test'
                name='name'
                className='form-control form-control-lg'
                placeholder='Enter name..'
                value={name}
                onChange={this.onChange}
                required

                >
                </input>
             </div>
             <div className='form-group'>
                <label htmlFor='email'>Email</label>
                <input
                type='test'
                name='email'
                className='form-control form-control-lg'
                placeholder='Enter email..'
                value={email}
                onChange={this.onChange}
                required

                >
                </input>
             </div>
             <div className='form-group'>
                <label htmlFor='name'>Phone</label>
                <input
                type='test'
                name='phone'
                className='form-control form-control-lg'
                placeholder='Enter phone..'
                value={phone}
                onChange={this.onChange}
                required

                >
                </input>
            </div>
           <input type='submit' value='Add Contact' className='btn btn-light btn-block'/>
        </form>
        </div>
    </div>
)

             }
             
             }

            </Consumer>
        )


        
    }
}
export default AddContact
