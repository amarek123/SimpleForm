import React from 'react'

class Validation extends React.Component{

    state = {
        nameValidation: true, 
        phoneValidation: true, 
        emailValidation: true,
        wojewodztwoValidation: true, 
        agreeValidation: true,
    }

    validation = () => {
        const {fullName, phone, email, wojewodztwo, agree} = this.props;
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
        var re = /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;
        return re.test(phone)
    }
    
    emailValidation = email => {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    wojewodztwoValidation = wojewodztwo => wojewodztwo === 'Województwo' ? false : true;
    
    agreeValidation = agree => agree === false ? false : true;

    render(){
        
        return null
    }
}

export default Validation