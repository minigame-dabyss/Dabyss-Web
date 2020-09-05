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
                <Button color="inherit">ゲーム一覧</Button>
                <Button color="inherit">ブログ</Button>
                <Button color="inherit">お問い合わせ</Button>
              </Grid>
              <Grid item xs={6} className={classes.right}>
                <Button color="inherit" className="fa fa-plus-circle">
                  LINE
                </Button>
                <Button color="inherit">Twitter</Button>
                <Button color="inherit">Instagram</Button>
              </Grid>
            </Grid>
          </Toolbar>
          <Typography variant="subtitle2" classes={classes.copyright}>
            © 2020 Copyright: Dabyss
          </Typography>
        </AppBar>
      </MuiThemeProvider>
    </div>
  );
};

export default Header;
