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

const GameCard = (props) => {
  const classes = useStyles();

  return (
    <div>
      <MuiThemeProvider theme={theme}>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="hoge"
              height="200"
              image={props.image}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {props.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {props.detail}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </MuiThemeProvider>
    </div>
  );
};

export default GameCard;
