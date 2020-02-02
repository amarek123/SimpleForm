import React from 'react'
import FormStyles from './Form_styles'
import Input from '../Input/Input'
import Select from '../Select/Select'
import Button from '../Button/Button'
import Label from '../Label/Label'

const wojewodztwa = [
    {value: 'wojewodztwo', label: 'Województwo'},
    {value: 'lubelskie', label: 'Lubelskie'},
    {value: 'mazowieckie', label: 'Mazowieckie'},
    {value: 'malopolskie', label: 'Małopolskie'}
  ]
  const select = wojewodztwa.map( (wojewodztwo, index) => {
    return <option key = {index} value = {wojewodztwo.value}>{wojewodztwo.label}</option>
  })

class Form extends React.Component{
    
    state = {
        nameValidation: true, 
        phoneValidation: true, 
        emailValidation: true,
        wojewodztwoValidation: true, 
        agreeValidation: true,
    }
        
    handleClick = e => {
        e.preventDefault();
        const {fullName, phone, email, wojewodztwo, agree} = this.props.data;
            this.setState({
                nameValidation: this.fullNameValidation(fullName), 
                phoneValidation: this.phoneValidation(phone), 
                emailValidation: this.emailValidation(email),
                wojewodztwoValidation: this.wojewodztwoValidation(wojewodztwo), 
                agreeValidation: this.agreeValidation(agree),
            })    
     }

    fullNameValidation = fullName => fullName ==='' ? false : true;
    
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
            <FormStyles onSubmit = {this.handleSubmit} noValidate autoComplete="off">
                <Input 
                    validate = {this.state.nameValidation} 
                    type = "text" 
                    placeholder = "Imię i nazwisko" 
                    name = "fullName" 
                    value = {this.state.fullName} 
                    onChange = {(event) => this.props.handleChange(event)}
                />
                <Input 
                    validate = {this.state.phoneValidation} 
                    type = "text" 
                    placeholder = "Telefon" 
                    name = "phone" 
                    value = {this.state.phone} 
                    onChange = {event => this.props.handleChange(event)}
                />
                <Input 
                    validate = {this.state.emailValidation} 
                    type = "text" 
                    placeholder = "E - mail" 
                    name = "email" 
                    value = {this.state.email} 
                    onChange = {event => this.props.handleChange(event)}
                />
                <Select 
                    validate = {this.state.wojewodztwoValidation} 
                    name = "wojewodztwo" 
                    value = {this.state.wojewodztwo} 
                    onChange = {event => this.props.handleChange(event)}
                >
                    {select}
                </Select>
                <Label 
                    validate = {this.state.agreeValidation} 
                    htmlFor = "agree"
                >
                    <input  
                        id = "agree" 
                        type = "checkbox" 
                        name = "agree" 
                        onChange = {this.props.handleChange}
                    />
                        Udzielam zgód wszelakich na robienie z 
                        podanymi danymi wszystkiego co dusza zapragnie
                </Label>
                <Button onClick = {event => this.handleClick(event)}>Wyślij</Button>
            </FormStyles>
        )
    }
}

export default Form
