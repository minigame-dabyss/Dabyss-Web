// 本当はTopGamesコンポーネントに入れて表示したいけどできなかったのでとりあえず置いておく。

import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import { MuiThemeProvider } from "@material-ui/core/styles";
import { theme } from "../theme";

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 345,
    margin: "auto",
  },
}));

const GameCard = () => {
  const classes = useStyles();

  return (
    <div>
      <MuiThemeProvider theme={theme}>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="hoge"
              height="140"
              image="./logo_Dabyss.png"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                ワードウルフ
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </MuiThemeProvider>
    </div>
  );
};

export default GameCard;
