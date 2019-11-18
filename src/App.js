import React from 'react';
import './styles/App.css';
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";

import Header from "./components/Header/Header.js";
import Button from "./components/CustomButtons/Button.js";
import GridContainer from "./components/Grid/GridContainer.js";
import GridItem from "./components/Grid/GridItem.js";
import HeaderLinks from "./components/Header/HeaderLinks.js";
import Parallax from "./components/Parallax/Parallax.js";

import styles from "./assets/jss/profilePage.js";
import profile from './images/mateus.jpg';

const useStyles = makeStyles(styles);


function App() {
  const classes = useStyles();

  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  
  return (
    <div className={classes.backGroudScreen} >
      <Header
        color="transparent"
        brand="Full-Stack Developer"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "dark"
        }}
      />
      <Parallax small filter image={require("./images/backgroud_page.png")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={profile} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>Mateus Piló Dias</h3>
                    <h5 className={classes.spaceTop} >Full-Stack Developer</h5>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-github"} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-facebook-square"} />
                    </Button>

                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-instagram"} />
                    </Button>

                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-linkedin"} />
                    </Button>
                   
                  </div>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
