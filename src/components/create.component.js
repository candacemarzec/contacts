import React, { Component } from 'react';

export default class  Create extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: '',
      phone_number: '',
      email: ''
    }
  }

onChangeName(e) {
  this.setState({
    name: e.target.value
  });
 }
onChangePhoneNumber(e) {
  this.setState({
    phone_number: e.target.value
  });
} 
onChangeEmail(e) {
  this.setState({
    email: e.target.value
  })
}

onSubmit(e) {
  e.preventDefault();
  console.log(`The values are ${this.state.name}, ${this.state.phone_number}, and ${this.state.email}`)
  this.setState({
    name: '',
    phone_number: '',
    email: ''
  })
}

    render() {
        return (
            <div style= {{marginTop: 10}}>
              <h3>Add New Contact</h3>
              <form>
                <div className="form-group">
                  <label>Name: </label>
                  <input
                   type="text" 
                   className="form-control"
                   value={this.state.name}
                   // onChange={this.onChangeName}
                   />
                </div>
                <div className="form-group">
                  <label>Phone Number: </label>
                  <input
                   type="text"
                   className="form-control"
                   value={this.state.phone_number}
                   // onChange={this.onChangePhoneNumber}
                    />
                </div>
                <div className="form-group">
                  <label>Email: </label>
                  <input
                   type="text"
                   className="form-control"
                   value={this.state.email}
                   // onChange={this.onChangeEmail}
                  />
                </div>
                <div className="form-group">
                  <input type="submit" value="Add Contact" className="btn btn-primary" />
                </div>
              </form>    
            </div>       
        )
    }
}
