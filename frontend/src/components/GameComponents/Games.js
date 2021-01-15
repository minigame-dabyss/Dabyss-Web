import React, { useState, useEffect } from "react";
import GameCard from "./GameCard";
import axios from "axios";

import { Typography, Grid, Box } from "@material-ui/core";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";

import { MuiThemeProvider } from "@material-ui/core/styles";
import { theme } from "../../theme";

const useStyles = makeStyles((theme) => ({
  title: {
    paddingTop: theme.spacing(4),
  },
  card: {
    padding: theme.spacing(4),
  },
}));

const Games = () => {
  const classes = useStyles();
  const [games, setGames] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}:8000/api/games/`);
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
          {games.map((game, index) => (
            <div key={index}>
              <Link to={`/games/${game.id}`}>
                <Grid item className={classes.card}>
                  <GameCard
                    image={game.sumnail}
                    name={game.title}
                    detail={game.summary}
                  ></GameCard>
                </Grid>
              </Link>
            </div>
          ))}
        </Grid>
      </MuiThemeProvider>
    </div>
  );
};

export default Games;
