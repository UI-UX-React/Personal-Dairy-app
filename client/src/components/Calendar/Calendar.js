import React from 'react';
import Calendar from '../Calendar/index';


import '../../App.css';

const style = {
  position: "relative",
  margin: "50px auto"
}

class App extends React.Component {
  onDayClick = (e, day) => {
    this.props.history.push(`/Quill`);
  }
  
  
  render() {
    return (
    <div>
      <div style={{backgroundColor:"red"}}></div>
      <div className="App">
           <Calendar style={style} width="1224px" 
          onDayClick={(e, day)=> this.onDayClick(e, day)}/>     
      </div>
    </div>
      
    );
  }
}

export default App;
