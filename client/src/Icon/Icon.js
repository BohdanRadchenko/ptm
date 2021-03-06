import React from "react";
// ICON IMPORT
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import AppsOutlinedIcon from '@material-ui/icons/AppsOutlined';
import AddCircleOutlineOutlinedIcon
  from '@material-ui/icons/AddCircleOutlineOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import NotificationsNoneOutlinedIcon
  from '@material-ui/icons/NotificationsNoneOutlined';
import DashboardIcon from '@material-ui/icons/Dashboard';
import GroupOutlinedIcon from '@material-ui/icons/GroupOutlined';
import AssignmentIndOutlinedIcon
  from '@material-ui/icons/AssignmentIndOutlined';
import DeveloperBoardOutlinedIcon
  from '@material-ui/icons/DeveloperBoardOutlined';
import StarBorderOutlinedIcon
  from '@material-ui/icons/StarBorderOutlined';
import HighlightOffOutlinedIcon from '@material-ui/icons/HighlightOffOutlined';
import KeyboardCapslockOutlinedIcon from '@material-ui/icons/KeyboardCapslockOutlined';
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

  const TeamIcon = () => {
    return (
        <div className={css.container}>
          <div className={css.icon}>
            <div className={css.icon__content}>
              <GroupOutlinedIcon className={css.pos}/>
            </div>
          </div>
        </div>
    )
  }

  const DashIcon = () => {
    return (
        <div className={css.container}>
          <div className={css.icon}>
            <div className={css.icon__content}>
              <DashboardIcon className={css.pos}/>
            </div>
          </div>
        </div>
    )
  }

  const StudentIcon = () => {
    return (
        <div className={css.container}>
          <div className={css.icon}>
            <div className={css.icon__content}>
              <AssignmentIndOutlinedIcon className={css.pos}/>
            </div>
          </div>
        </div>
    )
  }

  const BoardIcon = () => {
    return (
        <div className={css.container}>
          <div className={css.icon}>
            <div className={css.icon__content}>
              <DeveloperBoardOutlinedIcon className={css.pos}/>
            </div>
          </div>
        </div>
    )
  }

  const StarIcon = () => {
    return (
        // <div className={css.container}>
        //   <div className={css.icon}>
        //     <div className={css.icon__content}>
              <StarBorderOutlinedIcon className={css.pos}/>
            // </div>
          // </div>
        // </div>
    )
  }

  const DeleteIcon = () => {
    return (
        // <div className={css.container}>
        //   <div className={css.icon}>
        //     <div className={css.icon__content}>
              <HighlightOffOutlinedIcon className={css.pos}/>
            // </div>
          // </div>
        // </div>
    )
  }

  const CapsIcon = () => {
    return (
        // <div className={css.container}>
        //   <div className={css.icon}>
        //     <div className={css.icon__content}>
              <KeyboardCapslockOutlinedIcon style={{fontSize : '1rem'}} className={css.pos}/>
            // </div>
          // </div>
        // </div>
    )
  }

  return {
    HomeIcon,
    AppIcon,
    AddIcon,
    InfoIcon,
    BellIcon,
    DashIcon,
    StudentIcon,
    TeamIcon,
    BoardIcon,
    StarIcon,
    DeleteIcon,
    CapsIcon
  }

}

export default Icon