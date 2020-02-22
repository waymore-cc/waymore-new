import React from "react"
import classes from "./bussiness.module.css"

const Bussiness = () => {
  return (
    <>
      <div className={classes.moduleOne}>
        <h1 style={{ margin: 0 }}>Flawless Web</h1>
      </div>
      <div className={classes.moduleTwo}>
        <h1 style={{ margin: 0 }}>Mindful Design</h1>
      </div>
      <div className={classes.moduleThree}>
        <h1 style={{ margin: 0 }}>Bold Branding</h1>
      </div>
    </>
  )
}

export default Bussiness
