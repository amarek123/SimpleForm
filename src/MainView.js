import React from 'react';
import Form from './Form/Form'

class MainView extends React.Component {
  state = {
    fullName: "",
    phone: "",
    email: "",
    wojewodztwo: "Województwo",
    agree: false,
  }

  handleChange = e => {
  if(e.target.name === "agree"){
    this.setState(prevState =>({
      agree: !prevState.agree,
    }))
  } else{
    let text = e.target.value;
      this.setState( {
        [e.target.name]:  text,
      })
    }   
  }
  
render(){
  return (
    <Form handleChange = {this.handleChange} data = {this.state}/>
  );
}
  
}


export default MainView;
