import React from "react";

import { Link } from "react-router-dom";

import { AppBar, Toolbar, Typography, Button, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { theme } from "../theme";

import logoSrc from "../assets/logo_Dabyss.png";

const useStyles = makeStyles((theme) => ({
  header: {
    height: 80,
  },
  logo: {
    maxWidth: 60,
  },
  games: {
    padding: theme.spacing(2),
    fontWeight: "bold",
  },
  blog: {
    padding: theme.spacing(2),
    fontWeight: "bold",
  },
  contact: {
    padding: theme.spacing(2),
    fontWeight: "bold",
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div>
      <MuiThemeProvider theme={theme}>
        <AppBar position="static">
          <Toolbar className={classes.header}>
            <Grid item xs={2}>
              <Link to="/">
                <Grid container alignItems="center">
                  <img src={logoSrc} className={classes.logo} />
                  <Typography variant="h6" className={classes.title}>
                    MinigameDabyss
                  </Typography>
                </Grid>
              </Link>
            </Grid>
            <Grid item xs={4}></Grid>
            <Grid item xs={6} className={classes.right}>
              <Grid container alignItems="center" justify="flex-end">
                <Link to="/Games">
                  <Button color="inherit" className={classes.games}>
                    ゲーム一覧
                  </Button>
                </Link>
                <Link to="/Blog">
                  <Button color="inherit" className={classes.blog}>
                    ブログ
                  </Button>
                </Link>
                <Button color="inherit" className={classes.contact}>
                  お問い合わせ
                </Button>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </MuiThemeProvider>
    </div>
  );
};

export default Header;
