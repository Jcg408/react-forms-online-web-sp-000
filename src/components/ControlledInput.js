import React, { Component } from 'react';

class ControlledInput extends Component {
    state = { 
        firstName: "John",
        lastName: "Henry"
     }


     handleChange = event => {
         this.setState({
             [event.target.name]:event.target.value
         })
     }
     
    render() { 
        return ( 
            <form>
                <input type="text" id="firstName" onChange={event =>
                this.handleFirstNameChange(event)} value={this.state.firstName}/>
            <input type="text" id="lastName" onChange={event => this.handleLastNameChange(event)} 
            value={this.state.lastName} />
            </form>
         );
    }
}
 
export default ControlledInput;