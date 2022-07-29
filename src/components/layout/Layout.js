import React from 'react'
import classes from './Layout.module.css'

export const Layout = (props) => {
  return (
    <div className={classes.main}>
        {props.children}
    </div>
  )
}

export default Layout
