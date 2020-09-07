import React from "react";
import { AppBar, Toolbar, Typography, Button, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { MuiThemeProvider } from "@material-ui/core/styles";
import { theme } from "../theme";

const useStyles = makeStyles((theme) => ({
  appBar: {
    marginTop: theme.spacing(4),
  },
  footerLinks: {
    padding: theme.spacing(1),
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
        <AppBar className={classes.appBar} position="static">
          <Toolbar className={classes.footerLinks}>
            <Grid container>
              <Grid item xs={6} className={classes.left}>
                <Grid container>
                  <Grid item xs={4}></Grid>
                  <Grid item xs={4}>
                    <Grid container direction="column">
                      <Button color="inherit" className={classes.games}>
                        ゲーム一覧
                      </Button>
                      <Button color="inherit" className={classes.blog}>
                        ブログ
                      </Button>
                      <Button color="inherit" className={classes.contact}>
                        お問い合わせ
                      </Button>
                    </Grid>
                  </Grid>
                  <Grid item xs={4}></Grid>
                </Grid>
              </Grid>
              <Grid item xs={6} className={classes.right}>
                <Grid container>
                  <Grid item xs={5}></Grid>
                  <Grid item xs={2}>
                    <Grid container direction="column">
                      <Button color="inherit" className={classes.line}>
                        <img src="./line-brands.png" width="18"></img>
                      </Button>
                      <Button color="inherit" className={classes.twitter}>
                        <img src="./twitter-brands.png" width="18"></img>
                      </Button>
                      <Button color="inherit" className={classes.note}>
                        <img src="./logo_symbol.svg"></img>
                      </Button>
                    </Grid>
                  </Grid>
                  <Grid item xs={5}></Grid>
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
