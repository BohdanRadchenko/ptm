import React, {useState} from "react";
import {connect} from 'react-redux'
import {isLoading} from '../../redux/session/sessionSelectors'
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import css from './Auth.module.scss'
import {Loaders} from "../Loaders/Loaders";

const Auth = ({isLoading}) => {
  const [authType, setAuthType] = useState(true)

  const handleButtonClick = e => {
    setAuthType(!authType)
  }

  const typeText = authType ? 'Log in' : 'Sign Up'

  const getAuthType = type => {
    if (type === 'login') return setAuthType(true)
    if (type === 'signup') return setAuthType(false)
  }

  return (
      <div className={css.container}>
        <div className={css.container__bg}>
          <button
              onClick={e => handleButtonClick(e)}
              className={css.container__bg__button}>
            {/*{typeText}*/}
            {isLoading? <Loaders/> : typeText}
          </button>
        </div>
        <div className={css.container__main}>
          <div className={css.slider}>
            <div attrtype={`${authType}`}
                 className={css.slider__left}>
              <LoginForm getAuthType={getAuthType}/>
            </div>
            <div attrtype={`${authType}`}
                 className={css.slider__rigth}>
              <RegisterForm getAuthType={getAuthType}/>
            </div>
          </div>
        </div>
      </div>
  )
}

const mSTP = state => ({
  isLoading: isLoading(state)
})

export default connect(mSTP)(Auth)