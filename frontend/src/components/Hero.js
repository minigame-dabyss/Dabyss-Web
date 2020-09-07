import React from "react";
import { Grid, Typography, Box, Button } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import { MuiThemeProvider } from "@material-ui/core/styles";

import { theme } from "../theme";

const useStyles = makeStyles((theme) => ({
  hero: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  screen: {
    maxHeight: 500,
  },
  messageTop: {
    paddingBottom: theme.spacing(2),
  },
  button: {
    width: 240,
    height: 56,
    borderRadius: 40,
    marginTop: theme.spacing(2),
    color: "#ffffff",
    backgroundColor: "#1dcd00",
    "&:hover": {
      backgroundColor: "#1dcd00",
    },
  },
}));

const Hero = () => {
  const classes = useStyles();

  return (
    <div>
      <MuiThemeProvider theme={theme}>
        <Grid container alignItems="center" className={classes.hero}>
          <Grid item xs={1}></Grid>
          <Grid item xs={5}>
            <Grid container justify="center">
              <img src="./screen.png" className={classes.screen}></img>
            </Grid>
          </Grid>
          <Grid item xs={5}>
            <Typography variant="h4" gutterBottom>
              <Box fontWeight="fontWeightBold" className={classes.messageTop}>
                たくさん話せて
              </Box>
              <Box fontWeight="fontWeightBold">たくさん笑えるトークゲーム</Box>
            </Typography>
            <Typography variant="body1">
              夢ならばどれほどよかったでしょういまだにあなたのことを夢に見る忘れた物を取りに帰るように古びた思い出のホコリを払う
            </Typography>
            <Button variant="contained" color="line" className={classes.button}>
              <Typography variant="h6">LINEで友だち追加</Typography>
            </Button>
          </Grid>
        </Grid>
      </MuiThemeProvider>
    </div>
  );
};
export default Hero;
