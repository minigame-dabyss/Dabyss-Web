import React from "react";
import { Link } from "react-router-dom";

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Grid,
  Box,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { theme } from "../theme";

import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

import logoSrc from "../assets/logo_Dabyss.png";

const useStyles = makeStyles((theme) => ({
  header: {
    height: 80,
  },
  logo: {
    maxWidth: 60,
  },
  games: {
    margin: theme.spacing(1),
    // fontWeight: "bold",
  },
  blog: {
    margin: theme.spacing(1),
    fontWeight: "bold",
  },
  contact: {
    margin: theme.spacing(1),
    fontWeight: "bold",
  },
  spGames: {
    marginTop: theme.spacing(12),
    margin: theme.spacing(3),
    fontWeight: "bold",
  },
  spBlog: {
    margin: theme.spacing(3),
    fontWeight: "bold",
  },
  spContact: {
    margin: theme.spacing(3),
    fontWeight: "bold",
  },
  close: {
    margin: theme.spacing(3),
    marginTop: theme.spacing(10),
    fontWeight: "bold",
  },
  modal: {
    display: "flex",
  },
  paper: {
    width: "100%",
    height: "100%",
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2, 4, 3),
  },
  bold: {
    fontWeight: "bold",
  },
}));

const Header = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const modal = (
    <div className={classes.paper}>
      <Grid container direction="column" alignItems="center">
        <Link to="/Games" onClick={handleClose} className={classes.spGames}>
          ゲーム一覧
        </Link>
        <Link to="/Blog" className={classes.spBlog} onClick={handleClose}>
          ブログ
        </Link>
        <Link className={classes.spContact} onClick={handleClose}>
          お問い合わせ
        </Link>
        <Button color="inherit" className={classes.close} onClick={handleClose}>
          Close
        </Button>
      </Grid>
    </div>
  );

  return (
    <div>
      <MuiThemeProvider theme={theme}>
        <AppBar position="static">
          <Toolbar className={classes.header}>
            <Box display="flex" justifyContent="flex-start" flexGrow={1}>
              <Link to="/">
                <Grid container alignItems="center">
                  <img src={logoSrc} className={classes.logo} />
                  <Typography variant="h6" className={classes.title}>
                    MinigameDabyss
                  </Typography>
                </Grid>
              </Link>
            </Box>
            <Hidden xsDown implementation="css">
              <Box display="flex" justifyContent="flex-end">
                <Link to="/Games" className={classes.games}>
                  <Button color="inherit" className={classes.bold}>
                    ゲーム一覧
                  </Button>
                </Link>
                <Link to="/Blog" className={classes.blog}>
                  <Button color="inherit" className={classes.bold}>
                    ブログ
                  </Button>
                </Link>
                <Link className={classes.contact}>
                  <Button color="inherit" className={classes.bold}>
                    お問い合わせ
                  </Button>
                </Link>
              </Box>
            </Hidden>
            <Hidden smUp implementation="css">
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleOpen}
                className={classes.menuButton}
              >
                <MenuIcon />
              </IconButton>
            </Hidden>
          </Toolbar>
        </AppBar>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>{modal}</Fade>
        </Modal>
      </MuiThemeProvider>
    </div>
  );
};

export default Header;
