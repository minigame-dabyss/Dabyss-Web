import React, { Fragment, useState, useEffect } from "react";
import GameCard from "./GameCard";
import axios from "axios";

import { Link } from "react-router-dom";

import { Typography, Button, Grid, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { theme } from "../theme";

const useStyles = makeStyles((theme) => ({
  title: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  card: {
    padding: theme.spacing(4),
  },
  button: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

const TopGames = () => {
  const classes = useStyles();
  // const [articles, setArticles] = useState([]);
  // useEffect(() => {
  //   fetch("http://localhost:8000/api/games/")
  //     .then((res) => res.json())
  //     .then(
  //       (result) => {
  //         // setIsLoaded(true);
  //         setArticles(result.articles);
  // const [articles, setArticles] = useState([]);
  // useEffect(async () => {
  //   const res = await axios.get("http://localhost:8000/api/games/");
  //   setArticles(res.data);
  // }, []);
  return (
    <div>
      <MuiThemeProvider theme={theme}>
        <Grid container justify="center" className={classes.title}>
          <Typography variant="h4">
            <Box fontWeight="fontWeightBold">ゲーム一覧</Box>
          </Typography>
        </Grid>
        <Grid container justify="center">
          {/* {articles
            .slice(-3)
            .reverse()
            .map((article) => (
              <div>
                <Grid item className={classes.card}>
                  <GameCard
                    image={article.sumnail}
                    name={article.title}
                    detail={article.summary}
                  ></GameCard>
                </Grid>
              </div>
            ))} */}
          {/* <Grid item xs={4}>
            <GameCard
              image={articles.sumnail}
              name={articles.title}
              detail={articles.summary}
            ></GameCard>
          </Grid> */}
          {/* <Grid item xs={4}>
            <GameCard
              image="./logo_Dabyss.png"
              name="hoge"
              detail="hogehoge"
            ></GameCard>
          </Grid> */}
        </Grid>
        <Grid container justify="center" className={classes.button}>
          <Link to="/Games">
            <Button variant="outlined" color="secondary">
              more
            </Button>
          </Link>
        </Grid>
      </MuiThemeProvider>
    </div>
  );
};

export default TopGames;
