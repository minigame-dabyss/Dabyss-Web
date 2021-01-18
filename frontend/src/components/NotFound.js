import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Button, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

import notFoundSrc from "../assets/404.png";

const useStyles = makeStyles((theme) => ({
  padding: {
    padding: theme.spacing(10),
    alignItems: "center",
  },
  link: {
    "&:hover": {
      textDecoration: "none",
    },
  },
  notFound: {
    maxWidth: 500,
    margin: "0 auto",
  },
  bottom: {
    marginBottom: theme.spacing(0),
  },
  button: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(4),
  },
}));

const NotFound = () => {
  const classes = useStyles();
  return (
    <div className={classes.padding}>
      <Grid container direction="column" alignItems="center">
        <Grid item>
          <img
            src={notFoundSrc}
            alt="恰幅の良い男性"
            className={classes.notFound}
          ></img>
        </Grid>
        <Grid item>
          <h1 className={classes.bottom}>ごめんなさい！</h1>
        </Grid>
        <Grid item>
          <h1>お探しのページは見つかりません！</h1>
        </Grid>

        <Grid item>
          <Link to="/" className={classes.link}>
            <Button
              variant="outlined"
              color="secondary"
              className={classes.button}
            >
              <Typography variant="h6">TOPへ戻る</Typography>
            </Button>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};

export default NotFound;
