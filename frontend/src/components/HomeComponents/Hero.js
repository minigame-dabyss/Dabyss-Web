import React from "react";
import { Grid, Typography, Button, Hidden } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import { MuiThemeProvider } from "@material-ui/core/styles";

import { theme } from "../../theme";

const useStyles = makeStyles((theme) => ({
  hero: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  heroBottom: {
    justify: "flex-end",
  },
  screen: {
    maxHeight: 500,
    "@media (max-width:599px)": {
      maxHeight: 360,
    },
  },
  heroMessage: {
    paddingBottom: theme.spacing(2),
    fontWeight: "bold",
    "@media (max-width:599px)": {
      display: "flex",
      justifyContent: "center",
    },
  },
  heroText: {
    maxWidth: 480,
    "@media (max-width:599px)": {
      padding: theme.spacing(2),
      margin: "0 auto",
    },
  },
  button: {
    justify: "center",
    width: 240,
    height: 56,
    borderRadius: 40,
    marginTop: theme.spacing(2),
    color: "#ffffff",
    backgroundColor: "#1dcd00",
    "&:hover": {
      backgroundColor: "#1dcd00",
    },
    "@media (max-width:979px)": {
      margin: "0 auto",
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
  },
}));

const Hero = () => {
  const classes = useStyles();

  return (
    <div>
      <MuiThemeProvider theme={theme}>
        <Grid
          container
          direction="row-reverse"
          justify="center"
          alignItems="center"
          className={classes.hero}
        >
          <Grid item>
            <Grid container direction="column">
              <Grid item>
                <Grid container direction="column" justify="center">
                  <Hidden xsDown implementation="css">
                    <Typography variant="h4" className={classes.heroMessage}>
                      たくさん話せて
                    </Typography>
                    <Typography variant="h4" className={classes.heroMessage}>
                      たくさん笑えるトークゲーム
                    </Typography>
                    <Typography variant="body1" className={classes.heroText}>
                      Minigame
                      Dabyss(ダビス)は、コミュニケーションの可能性を無限にする複数のゲームを収録したLINE
                      botのサービスです。
                    </Typography>
                  </Hidden>
                  <Hidden smUp implementation="css">
                    <Typography variant="h5" className={classes.heroMessage}>
                      たくさん話せて
                    </Typography>
                    <Typography variant="h5" className={classes.heroMessage}>
                      たくさん笑える
                    </Typography>
                    <Typography variant="h5" className={classes.heroMessage}>
                      トークゲーム
                    </Typography>
                    <Typography variant="body2" className={classes.heroText}>
                      Minigame
                      Dabyss(ダビス)は、コミュニケーションの可能性を無限にする複数のゲームを収録したLINE
                      botのサービスです。
                    </Typography>
                  </Hidden>
                  <Button
                    href="https://line.me/R/ti/p/@390zkjvc"
                    variant="contained"
                    className={classes.button}
                  >
                    <Typography variant="h6">LINEで友だち追加</Typography>
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.heroBottom}>
            <img src="./screen.png" alt="プレイ画面" className={classes.screen}></img>
          </Grid>
        </Grid>
      </MuiThemeProvider>
    </div>
  );
};
export default Hero;
