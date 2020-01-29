import React from 'react';
import Button from './Button/Button'
import Input from './Input/Input'
import Form from './Form/Form'
import Label from './Label/Label';
import Select from './Select/Select'

const wojewodztwa = [
  {value: 'wojewodztwo', label: 'Województwo'},
  {value: 'lubelskie', label: 'Lubelskie'},
  {value: 'mazowieckie', label: 'Mazowieckie'},
  {value: 'malopolskie', label: 'Małopolskie'}
]
const select = wojewodztwa.map( (wojewodztwo, index) => {
  return <option key = {index} value = {wojewodztwo.value}>{wojewodztwo.label}</option>
})

class MainView extends React.Component {
  state = {
    fullName: "",
    phone: "",
    email: "",
    wojewodztwo: "Województwo",
    agree: false,
    nameValidation: true, 
    phoneValidation: true, 
    emailValidation: true,
    wojewodztwoValidation: true, 
    agreeValidation: true,
  }
  
  handleSubmit = e => {
    e.preventDefault();
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
  handleClick = () => {
    const {fullName, phone, email, wojewodztwo, agree} = this.state;
        this.setState({
            nameValidation: this.fullNameValidation(fullName), 
            phoneValidation: this.phoneValidation(phone), 
            emailValidation: this.emailValidation(email),
            wojewodztwoValidation: this.wojewodztwoValidation(wojewodztwo), 
            agreeValidation: this.agreeValidation(agree),
        })
    
  }

  fullNameValidation = fullName => fullName === '' ? false : true;
    
  phoneValidation = phone => {
      const re = /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;
      const phoneNumberLength = 9;
      return re.test(phone) && phone.length === phoneNumberLength
  }
    
  emailValidation = email => {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
  }

  wojewodztwoValidation = wojewodztwo => wojewodztwo === 'Województwo' ? false : true;
    
  agreeValidation = agree => agree === false ? false : true;
  

render(){
  return (
    <Form onSubmit = {this.handleSubmit} noValidate autoComplete="off">
       <Input validate = {this.state.nameValidation} type = "text" placeholder = "Imię i nazwisko" name = "fullName" value = {this.state.fullName} onChange = {this.handleChange}/>
       <Input validate = {this.state.phoneValidation} type = "text" placeholder = "Telefon" name = "phone" value = {this.state.phone} onChange = {this.handleChange}/>
       <Input validate = {this.state.emailValidation} type = "text" placeholder = "E - mail" name = "email" value = {this.state.email} onChange = {this.handleChange}/>
       <Select validate = {this.state.wojewodztwoValidation} name = "wojewodztwo" value = {this.state.wojewodztwo} onChange = {this.handleChange}>
          {select}
       </Select>
       <Label validate = {this.state.agreeValidation} htmlFor = "agree">
          <input  id = "agree" type = "checkbox" name = "agree" onChange = {this.handleChange}/>
          Udzielam zgód wszelakich na robienie z 
          podanymi danymi wszystkiego co dusza zapragnie
       </Label>
       <Button onClick = {this.handleClick}>Wyślij</Button>
    </Form>
  );
}
  
}


export default MainView;
