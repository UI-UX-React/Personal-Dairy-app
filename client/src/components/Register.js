        import React, { Component } from 'react'
        import { register } from './UserFunctions'
        // import { Link, withRouter } from 'react-router-dom'

        class Register extends Component {
            constructor() {
                super()
                this.state = {
                    first_name: '',
                    last_name: '',
                    email: '',
                    password: '',
                }
                this.onChange = this.onChange.bind(this)
                this.onSubmit = this.onSubmit.bind(this)
            }

            onChange (e) {
                this.setState({ [e.target.name]: e.target.value })
            }

            onSubmit (e) {
                e.preventDefault()

                const user = {
                    first_name: this.state.first_name,
                    last_name: this.state.last_name,
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

                if (errors.email === "" && errors.password === "") {
                    register(user).then(res => {
                        this.props.history.push(`/`)
                        alert("Successfully Registered")
                        
                    })
                }
                else {
                    alert("Invaid email Address or Password");
                }
                
            }
            
            

            render () {
                return (
                    <div class="container">
                    <div class="row">
                    <div id="head3" style={{ fontSize: "20px" }} class="col-6">
                        <br></br>
                        <br></br>
                        
                    <h1><b>Personal diary</b> </h1>
                    <br></br>
                    
                    <p> eDiary as your personal diary now
                    <br></br>
                    eDiary as your personal diary now
                    <i>Write what's happening in life!!?</i>
        <br></br>Express your feelings by designing your words in a colourful way 
        <br></br>Collect your memories, thoughts, ups and downs of life online. 
        <br></br>Capture your memories in the form of photos and upload it online unlimited!!!
        <br></br>Write from anywhere, at anytime.
     No limit for words or pages!!! 
        no fear of others reading your diary.
                    
                    </p></div>
                        
                            
                    <div class="head2" style={{ fontSize:"20px",color:"white"}} class="col-6">    <form noValidate onSubmit={this.onSubmit}>
                                    <br></br>
                                    <br></br>
                                
                                    <h1 className="h4 mb-3 "><b>Register</b></h1>
                                    <div className="form-group">
                                        <label htmlFor="first_name">First Name *</label>
                                        <input type="text"
                                            className="form-control"
                                            name="first_name"
                                            aria-label= "Enter your First name"
                                            style={{width:"200px" }}
                                            placeholder="Enter First Name"
                                            value={this.state.first_name}
                                            onChange={this.onChange} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="last_name">Last Name *</label>
                                        <input type="text"
                                            className="form-control"
                                            name="last_name"
                                            aria-label= "Enter your last name"
                                            style={{width:"200px" }}
                                            
                                            placeholder="Enter Last Name"
                                            value={this.state.last_name}
                                            onChange={this.onChange} />
                                    </div>
                                    
                                    <div className="form-group">
                                        <label htmlFor="email" style={{marginLeft: "30px"}} >Email Address *</label>
                                        <input type="email"
                                            className="form-control"
                                            name="email"
                                            aria-label= "Enter your Email id"
                                            style={{width:"200px" }}
                                            
                                        
                                            placeholder="Enter Email"
                                            value={this.state.email}
                                            onChange={this.onChange} />
                                    </div>
                                    <div className="form-group">
                                    
                                        <label htmlFor="password">Password *</label>
                                        <input type="password"
                                            className="form-control"
                                            name="password"
                                            aria-label= "Enter your Password"
                                            style={{width:"200px" }}
                                            placeholder="Enter Password"
                                            value={this.state.password}
                                            onChange={this.onChange} />
                                    </div>
                                    <button id="register"  aria-label= "click on the button  to register"  type="submit" style={{width:"100px", alignItems:"center", color:"black"}} className="btn btn-lg btn-primary btn-block">
                                        Register
                                    </button>
                                    
                                </form>
                            </div>
                            </div> 
                            </div> 
                        
                )
            }
        }

        export default Register