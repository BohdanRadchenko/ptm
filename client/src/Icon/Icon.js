import React from "react";

// ICON IMPORT
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import AppsOutlinedIcon from '@material-ui/icons/AppsOutlined';
import AddCircleOutlineOutlinedIcon
  from '@material-ui/icons/AddCircleOutlineOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import NotificationsNoneOutlinedIcon
  from '@material-ui/icons/NotificationsNoneOutlined';

// STYLE IMPORT
import css from './Icon.module.scss'

const Icon = () => {

  const HomeIcon = () => {
    return (
        <div className={css.container}>
          <div className={css.icon}>
            <div className={css.icon__content}>
              <HomeOutlinedIcon className={css.pos}/>
            </div>
          </div>
        </div>
    )
  }

  const AppIcon = () => {
    return (
        <div className={css.container}>
          <div className={css.icon}>
            <div className={css.icon__content}>
              <AppsOutlinedIcon className={css.pos}/>
            </div>
          </div>
        </div>
    )
  }

  const AddIcon = () => {
    return (
        <div className={css.container}>
          <div className={css.icon}>
            <div className={css.icon__content}>
              <AddCircleOutlineOutlinedIcon className={css.pos}/>
            </div>
          </div>
        </div>
    )
  }

  const InfoIcon = () => {
    return (
        <div className={css.container}>
          <div className={css.icon}>
            <div className={css.icon__content}>
              <InfoOutlinedIcon className={css.pos}/>
            </div>
          </div>
        </div>
    )
  }

  const BellIcon = () => {
    return (
        <div className={css.container}>
          <div className={css.icon}>
            <div className={css.icon__content}>
              <NotificationsNoneOutlinedIcon className={css.pos}/>
            </div>
          </div>
        </div>
    )
  }

  return {HomeIcon, AppIcon, AddIcon, InfoIcon, BellIcon}

}

export default Icon