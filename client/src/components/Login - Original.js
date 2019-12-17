import React, { Component } from 'react'
import { login } from './UserFunctions'

class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      errors: {}
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()

    const user = {
      email: this.state.email,
      password: this.state.password
    }

    const errors = {}
    const emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    errors.email = !user.email.match(emailformat) ?
      "Invalid Email" : ""
    errors.password = user.password.length < 6 ?
      "Password should be more than 6 characters" : ""
    console.log(errors)

    if (errors.email === "" && errors.password === "")
      login(user).then(res => {
        if (res) {
          this.props.history.push(`/profile`)
        }
      })
    else {
      alert("Incorrect email id or password");
    }
  }

  render() {
    return (
      <div class="row">

        <div id="head1" className="column-6">Diary App
           <p>
           jfadadjadjkahdakjdhbajdhkjajkbjkrithehshskcibcakjvaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa                       
          </p>
          <br></br>
          <div id="head" className="column-6">
            <br></br>
            <br></br>
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className="h3 mb-3 font-weight-normal" >Please sign in</h1>
              <div className="form-group" >
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  style={{ width: "200px" }}
                  placeholder="Enter email"
                  value={this.state.email}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  style={{ width: "200px" }}
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
              </div>
              <br></br>
              <button id="signin" type="submit" style={{ width: "100px", alignItems: "center" }} className="btn btn-lg btn-primary btn-block">
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>


    )
  }
}

export default Login