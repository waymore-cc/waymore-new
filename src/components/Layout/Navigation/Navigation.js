import React from "react"
import classes from "./navigation.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Navigation = () => {
  return (
    <nav className={classes.nav}>
      <p>MENU</p>
      <ul>
        <li>
          <h2 className={classes.menuLink}>
            <AniLink
              paintDrip
              direction="left"
              duration={0.75}
              hex="#1b1b1b"
              to="/oferta"
              activeStyle={{ color: "red" }}
            >
              Oferta
            </AniLink>
          </h2>
        </li>
        <li>
          <h2 className={classes.menuLink}>
            <AniLink
              paintDrip
              direction="left"
              duration={0.75}
              hex="#1b1b1b"
              to="/case-studies"
              activeStyle={{ color: "red" }}
            >
              Case Studies
            </AniLink>
          </h2>
        </li>
        <li>
          <h2 className={classes.menuLink}>
            <AniLink
              paintDrip
              direction="left"
              duration={1}
              hex="#1b1b1b"
              to="/o-nas"
              activeStyle={{ color: "red" }}
            >
              O Nas
            </AniLink>
          </h2>
        </li>
        <li>
          <h2 className={classes.menuLink}>
            <AniLink
              paintDrip
              direction="left"
              duration={0.75}
              hex="#1b1b1b"
              to="/kontakt"
              activeStyle={{ color: "red" }}
            >
              Kontakt
            </AniLink>
          </h2>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
