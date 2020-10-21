import React from "react";
import { Link } from "react-router-dom";

import { AppBar, Toolbar, Typography, Button, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { theme } from "../theme";

import lineLogo from "../assets/line.png";
import twiiterLogo from "../assets/twitter.png";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "static",
  },
  footerLinks: {
    padding: theme.spacing(1),
  },
  left: {
    alignItems: "center",
  },
  games: {
    height: 48,
  },
  blog: {
    height: 48,
  },
  contact: {
    height: 48,
  },
  line: {
    height: 48,
  },
  twitter: {
    height: 48,
  },
  copyright: {
    padding: theme.spacing(1),
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <div>
      <MuiThemeProvider theme={theme}>
        <AppBar className={classes.appBar}>
          <Toolbar className={classes.footerLinks}>
            <Grid container justify="space-around">
              <Grid item>
                <Grid container direction="column" className={classes.left}>
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
              <Grid item>
                <Grid container direction="column">
                  <Button
                    href="https://line.me/R/ti/p/@390zkjvc"
                    color="inherit"
                    className={classes.line}
                  >
                    <img src={lineLogo} width="18"></img>
                  </Button>
                  <Button
                    href="https://twitter.com/m_dabyss?s=20"
                    color="inherit"
                    className={classes.twitter}
                  >
                    <img src={twiiterLogo} width="18"></img>
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Toolbar>
          <Grid
            container
            alignItems="center"
            justify="center"
            className={classes.copyright}
          >
            <Typography variant="subtitle2">2020 © Dabyss</Typography>
          </Grid>
        </AppBar>
      </MuiThemeProvider>
    </div>
  );
};

export default Footer;
