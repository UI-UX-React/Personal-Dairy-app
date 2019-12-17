  import React, { Component } from 'react'
  import { BrowserRouter as Router, Route } from 'react-router-dom'
   
  import Navbar from './components/Navbar'
  // import Landing from './components/Landing'
  import Login from './components/Login'
  import Register from './components/Register'
  // import Profile from './components/Profile'
  import Header from "./components/header";
  import Footer from "./components/footer";
  import  RichTextEditor from "./components/Quill";
  import Calender from "./components/Calendar/Calendar"
  import Editor from "./components/Editor"

  class App extends Component {
    render() {
      return (
        <Router>
          <div className="App">
          <Header />
            <Navbar /> 
            <Route exact path="/" component={Login} />
          
            <div className="container">
              <Route exact path="/register" component={Register} />
              {/* <Route exact path="/landing" component={Landing} />  */}
              <Route exact path="/quill" component={RichTextEditor} /> 
              {/* <Route exact path="/profile" component={RichTextEditor} /> */}
              <Route exact path="/Calender" component={Calender} />
              <Route exact path="/Editor" component={Editor} />
              {/* <Route exact path="/demo" component={RichTextEditor} /> */}
            </div>
            <Footer />
          </div>
        </Router>
      )
    }
  }

  export default App