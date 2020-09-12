import React, { Fragment, useState, useEffect } from "react";
import GameCard from "./GameCard";
import axios from "axios";

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
    padding: theme.spacing(4),
  },
}));

const Games = () => {
  const classes = useStyles();
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const res = await axios.get("http://localhost:8000/api/games/");
      setArticles(res.data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <MuiThemeProvider theme={theme}>
        <Grid container justify="center" className={classes.title}>
          <Typography variant="h4">
            <Box fontWeight="fontWeightBold">ゲーム一覧</Box>
          </Typography>
        </Grid>
        <Grid container justify="center">
          {articles.map((article) => (
            <div>
              <Grid item className={classes.card}>
                <GameCard
                  image={article.sumnail}
                  name={article.title}
                  detail={article.summary}
                ></GameCard>
              </Grid>
            </div>
          ))}
        </Grid>
      </MuiThemeProvider>
    </div>
  );
};

export default Games;
