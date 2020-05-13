import React, {useState} from "react";
import {connect} from 'react-redux'
import {login} from '../../redux/session/sessionOperations'
import css from './AuthForm.module.scss'

const LoginForm = ({getAuthType, onLogIn}) => {
  const defaultForm = {
    email: '',
    password: '',
  }
  const [form, setForm] = useState(defaultForm)

  const handleInputChange = e => {
    setForm({...form, [e.target.name]: e.target.value})
  }

  const handleSwapButton = () => {
    getAuthType('signup')
  }

  const handleFormSubmit = e => {
    e.preventDefault()
    onLogIn(form)
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
          <input type="password" name='password' value={form.password}
                 className={css.form__password}
                 required
                 onChange={handleInputChange}/>

          <div className={css.button}>
            <button type='submit'
                    className={css.button__enter}>Log In
            </button>
            <button type='button'
                    onClick={handleSwapButton}
                    className={css.button__swap}>Sign Up
            </button>
          </div>
        </form>
      </div>
  )
}

const mDTP = {
  onLogIn : login
}

export default connect(null, mDTP)(LoginForm)
