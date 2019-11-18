
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

import Button from "../CustomButtons/Button";

import styles from "../../assets/jss/components/headerLinksStyle";


const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        {/*<Tooltip title="Delete">
          <IconButton aria-label="Delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>*/}
        <Tooltip
          id="instagram-twitter"
          title="Siga no GitHub"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://github.com/Mateus-pilo"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-github"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Siga no Facebook"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com/mateus.pilo"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-facebook-square"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Siga no instagram"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.instagram.com/mateusdias02/?hl=pt-br"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-instagram"} />
          </Button>
        </Tooltip>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Siga no LinkedIn"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.linkedin.com/in/mateus-pil%C3%B3-dias-002ab26b/"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + "	fab fa-linkedin"} />
          </Button>
        </Tooltip>
      </ListItem>


     
    </List>
  );
}
