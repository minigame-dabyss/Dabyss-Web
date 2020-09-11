import React from "react";

import {
  Typography,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  TextField,
} from "@material-ui/core";

import { makeStyles, fade } from "@material-ui/core/styles";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { theme } from "../theme";

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 740,
    margin: "auto",
    marginBottom: theme.spacing(2),
  },
  CardActionArea: {
    padding: theme.spacing(2),
  },
  media: {
    height: 120,
  },
  CardContent: {
    paddingTop: theme.spacing(0),
  },
}));

const Article = () => {
  const classes = useStyles();

  return (
    <div>
      <MuiThemeProvider theme={theme}>
        <Card className={classes.card} elevation={0} variant="outlined">
          <CardActionArea className={classes.CardActionArea}>
            <Typography gutterBottom variant="body1" className={classes.date}>
              2020/09/09
            </Typography>
            <Grid container>
              <Grid item xs={3}>
                <CardMedia
                  className={classes.media}
                  image="./logo_Dabyss.png"
                  title="Contemplative Reptile"
                />
              </Grid>
              <Grid item xs={9}>
                <CardContent className={classes.CardContent}>
                  <Typography gutterBottom variant="h5">
                    機械学習の社会実装のためにメルペイの与信モデリングで実践していること
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    #Machine Learning
                  </Typography>
                  <Typography variant="body2" component="p">
                    Author:Kensi Yonezu
                  </Typography>
                </CardContent>
              </Grid>
            </Grid>
          </CardActionArea>
        </Card>
      </MuiThemeProvider>
    </div>
  );
};

export default Article;
