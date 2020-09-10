import React from "react";
import GameCard from "./GameCard";

import { Typography, Grid, Box } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import { MuiThemeProvider } from "@material-ui/core/styles";
import { theme } from "../theme";

const useStyles = makeStyles((theme) => ({
  title: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  card: {
    maxWidth: 345,
    margin: "auto",
  },
}));

const Games = () => {
  const classes = useStyles();

  return (
    <div>
      <MuiThemeProvider theme={theme}>
        <Grid container justify="center" className={classes.title}>
          <Typography variant="h4">
            <Box fontWeight="fontWeightBold">ゲーム一覧</Box>
          </Typography>
        </Grid>
        <Grid container>
          <Grid item xs={4}>
            <GameCard
              image="./logo_Dabyss.png"
              name="hoge"
              detail="hogehoge"
            ></GameCard>
          </Grid>
          <Grid item xs={4}>
            <GameCard
              image="./logo_Dabyss.png"
              name="hoge"
              detail="pagepage"
            ></GameCard>
          </Grid>
          <Grid item xs={4}>
            <GameCard
              image="./logo_Dabyss.png"
              name="hoge"
              detail="Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica"
            ></GameCard>
          </Grid>
        </Grid>
      </MuiThemeProvider>
    </div>
  );
};

export default Games;
