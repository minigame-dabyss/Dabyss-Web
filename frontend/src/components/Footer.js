import React from "react";
import { AppBar, Toolbar, Typography, Button, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { MuiThemeProvider } from "@material-ui/core/styles";
import { theme } from "../theme";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div>
      <MuiThemeProvider theme={theme}>
        <AppBar className={classes.appBar} position="static">
          <Toolbar>
            <Grid container>
              <Grid item xs={6} className={classes.left}>
                <Grid container direction="column">
                  <Button color="inherit">ゲーム一覧</Button>
                  <Button color="inherit">ブログ</Button>
                  <Button color="inherit">お問い合わせ</Button>
                </Grid>
              </Grid>
              <Grid item xs={6} className={classes.left}>
                <Grid container direction="column">
                  <Button color="inherit">LINE</Button>
                  <Button color="inherit">Twitter</Button>
                  <Button color="inherit">Instagram</Button>
                </Grid>
              </Grid>
            </Grid>
          </Toolbar>
          <Grid container alignItems="center" justify="center">
            <Typography variant="subtitle2" classes={classes.copyright}>
              Copyright © Dabyss All Rights Reserved.
            </Typography>
          </Grid>
        </AppBar>
      </MuiThemeProvider>
    </div>
  );
};

export default Header;
