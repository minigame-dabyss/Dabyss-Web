import React from "react";
import { AppBar, Toolbar, Typography, Button, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { MuiThemeProvider } from "@material-ui/core/styles";
import { theme } from "../theme";

const useStyles = makeStyles((theme) => ({
  header: {
    height: 80,
  },
  logo: {
    maxWidth: 60,
  },
  games: {
    padding: theme.spacing(2),
  },
  blog: {
    padding: theme.spacing(2),
  },
  contact: {
    padding: theme.spacing(2),
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MuiThemeProvider theme={theme}>
        <AppBar position="static">
          <Toolbar className={classes.header}>
            <Grid item xs={6}>
              <Grid container alignItems="center">
                <a href="#">
                  <img src="./logo_Dabyss.png" className={classes.logo} />
                </a>
                <Typography variant="h6" className={classes.title}>
                  <a href="#">MinigameDabyss</a>
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={6} className={classes.right}>
              <Grid container alignItems="center" justify="flex-end">
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
          </Toolbar>
        </AppBar>
      </MuiThemeProvider>
    </div>
  );
};

export default Header;
