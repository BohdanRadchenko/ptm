import React, {useState} from "react";
import {connect} from 'react-redux'
import {signUp} from '../../redux/session/sessionOperations'
import css from './AuthForm.module.scss'

const RegisterForm = ({getAuthType, onSignUp}) => {
  const defaultForm = {
    email: '',
    name: '',
    password: '',
    passwordAgain: ''
  }
  const [form, setForm] = useState(defaultForm)

  const handleInputChange = e => {
    setForm({...form, [e.target.name] : e.target.value})
  }

  const handleSwapButton = () => {
    getAuthType('login')
  }


  const handleFormSubmit = e => {
    e.preventDefault()
    onSignUp(form)
    setForm(defaultForm)
  }

  return (
      <div className={css.container}>
        <form
            className={css.form}
            onSubmit={e => handleFormSubmit(e)}>
          <h1 className={css.form__title}>Welcome Aboard</h1>
          <input type="email" name='email' value={form.email}
                 placeholder='Enter email...'
                 required
                 className={css.form__email}
                 onChange={handleInputChange}/>
          <input type="text" name='name' value={form.name}
                 placeholder='First Name Second Name'
                 required
                 className={css.form__name}
                 onChange={handleInputChange}/>
          <input type="password" name='password' value={form.password}
                 className={css.form__password}
                 required
                 onChange={handleInputChange}/>
          <input type="password" name='passwordAgain'
                 value={form.passwordAgain}
                 required
                 className={css.form__password}
                 onChange={handleInputChange}/>

          <div className={css.button}>
            <button type='submit'
                    className={css.button__enter}>Sign Up
            </button>
            <button type='button'
                    onClick={handleSwapButton}
                    className={css.button__swap}>Log in
            </button>
          </div>
        </form>
      </div>
  )
}

const mDTP = {
  onSignUp : signUp
}


export default connect(null, mDTP)(RegisterForm)