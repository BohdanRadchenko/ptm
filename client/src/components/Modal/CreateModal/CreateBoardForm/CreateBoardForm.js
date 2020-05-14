import React, {useState} from "react";
import DateSelector
  from "../../../Selector/DateSelector/DateSelector";
import css from './CreateBoardForm.module.scss'

const CreateBoardForm = ({onClose, onCreate}) => {
  const defaultForm = {
    startValueDay: 0,
    startValueMonth: 0,
  }
  const [form, setForm] = useState(defaultForm)

  const getStartDay = value => {
    setForm({
      ...form,
      startValueDay: value.day,
      startValueMonth: value.month
    })
  }

  const handleFormSubmit = e => {
    e.preventDefault()
    onCreate(form)
    // setForm(defaultForm) // comment for test back-end
    // onClose()  // comment for test back-end
  }

  return (
      <div className={css.container}>
        <form
            className={css.form}
            onSubmit={handleFormSubmit}>

          <div className={css.cardWrapper}>
            <div className={css.inputWrapper}>

              <div className={css.dateWrapper}>
                <DateSelector getStartDay={getStartDay}/>
              </div>

              <div className={css.closeButton}
                   onClick={onClose}/>
            </div>


          </div>

          <button
              type='submit'
              className={css.submitButton}>
            Create board
          </button>

        </form>
      </div>
  )
}

export default CreateBoardForm