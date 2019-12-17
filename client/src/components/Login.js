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
          this.props.history.push(`/Calender`)
    
        }
      })
    else {
      alert("Incorrect email id or password");
    }
  }

  render() {
    return (
      <div class="container" >
        <div class="row" >
          <div id="head1"  style={{ fontSize: "20px" }} class="col-6">
            <br></br>
            <br></br>
            <br></br>

            <h1><b>Diary App</b></h1>

            <br></br>

            <p> Create your own personal diary Completely secured. 
              Here is the safe place to collect and store your memories, captures on one platform. 
              View any of your previous memories with just selecting the date or by smiley review or by the title. 
              It can't be lost or destroyed.
<br></br>
              <br></br>
              &nbsp; &nbsp; <i>If you’re serious about becoming a wealthy,
             powerful,  sophisticated, healthy, influential,
              cultured, and unique  individual, keep a journal."</i>"
         <br></br>
              
              &nbsp; &nbsp; &nbsp; &nbsp; <i>- Jim Rohn, business philosopher and author</i> </p></div>
          <div id="head"   style={{ fontSize: "20px" }}class="col-6"> <form noValidate onSubmit={this.onSubmit}>
            <h1 className="h3 mb-3 " ><b>Sign-in</b></h1>
            <div className="form-group"  >
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                className="form-control"
                name="email"
                aria-label= "Enter your Email id"
                style={{ width: "200px" }}
                placeholder="Enter email"
                value={this.state.email}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group"  >
              <label htmlFor="password" style={{marginLeft:"-30px"}} >Password</label>
              <input
                className="form-control"
                name="password"
                aria-label= "Enter your password"
                style={{ width: "200px" }}
                placeholder=" Password"
                value={this.state.password}
                onChange={this.onChange}
                type="password"
              />
            </div>

            <button id="signin"  type="submit" aria-label= "Login to view the dashboard" style={{ width: "100px", alignItems: "center", color: "" }} className="btn btn-">
              Login </button>
            <br></br>
            <br></br>

            <a  href="/Register" style={{color: "black"}} onClick={this.handleClick}>  <center> <mark> New User? Register Here </mark>  </center>  </a>
       
          </form>
          </div>
        </div>

      </div>


    )
  }
}

export default Login
