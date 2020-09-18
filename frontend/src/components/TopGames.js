import React, { useState, useEffect } from "react";
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
  const [games, setGames] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const res = await axios.get("http://localhost:8000/api/games/");
      console.log(res.data);
      setGames(res.data);
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
          {games
            .slice(-3)
            .reverse()
            .map((article, index) => (
              <div key={index}>
                <Link to={`/Games/GameArticle/${article.id}`}>
                  <Grid item className={classes.card}>
                    <GameCard
                      image={article.sumnail}
                      name={article.title}
                      detail={article.summary}
                    ></GameCard>
                  </Grid>
                </Link>
              </div>
            ))}
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
