import React from 'react'

export default function UserForms(props) {
  const {values, submit,change,disabled,errors,} = props

  const onSubmit = evt => {
    evt.preventDefault()
    submit()
  }

  const onChange = event => {
      const { name,value,checked,type} = event.target
      const valueToUse = type === "checkbox" ? checked: value;
      change(name, valueToUse)
  }
return (
    <form className = 'form-container' onSubmit ={onSubmit}>
        <div>
            <h2>Onboard here!</h2>
            <div className = 'errors'>
                <div> {errors.Name} </div>
                <div> {errors.Email} </div>
                <div> {errors.Password} </div>
                <div> {errors.TermsOfService} </div>
                 </div>
<div className = 'inputs'> 
<label>Name
    <input 
    value = {values.Name}
    onChange = {onChange}
    name = "Name"
    type = 'text'
    
    />
</label>
<label>Email
    <input 
    value = {values.Email}
    onChange = {onChange}
    name = "Email"
    type = 'email'
    
    />
</label>
<label>Password
    <input 
    value = {values.Password}
    onChange = {onChange}
    name = "Password"
    type = 'password'
    
    />
</label>
<label>Do You Agree To The Terms and Conditions?
          <input
            type='checkbox'
            name='TermsOfService'
            checked={values.TermsOfService}
            onChange={onChange}
          />
        </label>

</div>

            <button disabled = {disabled}></button>
        </div>
    </form>
)











}