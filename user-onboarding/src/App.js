import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios'
import * as yup from 'yup';
import schema from "./Validation/UserSchema"
import UserForms from './Components/UserForm';
import Users from './Components/Users'

const initialFormValue = {
  Name: "",
  Email: "",
  Password: "",
  TermsOfService: false
}
const initialFormError = {
  Name: "",
  Email: "",
  Password: "",
  TermsOfService: ""
}

const initialUser = [];
const initialDisabled = true


function App() {
  const [users, setUsers] = useState(initialUser)
  const [formValues, setFormValues] = useState(initialFormValue) 
  const [formErrors, setFormErrors] = useState(initialFormError) 
  const [disabled, setDisabled] = useState(initialDisabled) 

  const postNewUser = newUser => {
    axios.post(`https://reqres.in/api/users`, newUser)
    .then(res =>{
      setUsers([res.data, ...users])
    }).catch(err => console.error(err))
    .finally(() => setFormValues(initialFormError));
  }
  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: '' }))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }

  const inputChange = (name, value) =>{
validate(name,value)
setFormValues({
  ...formValues , [name]:value
})
  }
const formSubmit = () =>{
  const newUser = {
    Name: formValues.Name.trim(),
    Email: formValues.Email.trim(),
    Password: formValues.Password,
    TermsOfService:formValues.TermsOfService
  }
  postNewUser(newUser )
}
useEffect(() => {
  schema.isValid(formValues).then(valid => setDisabled(!valid))
}, [formValues])
return (
<div className ='container'>
<header>
  <h1>
    New User Onboarding
  </h1>
</header>
<UserForms 
values = {formValues}
change = {inputChange}
submit = {formSubmit}
disabled = {disabled}
errors = {formErrors}

/>
{users.map((user => {
  return (
    <Users key = {user.id} details = {user}/>
  )
}))}




</div>





)
}

export default App;
