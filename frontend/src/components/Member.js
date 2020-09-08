import React from "react";
import { Grid, Avatar, Typography, Box } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import { MuiThemeProvider } from "@material-ui/core/styles";
import { theme } from "../theme";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: 150,
    height: 150,
  },
}));

const Member = (props) => {
  const classes = useStyles();

  return (
    <div>
      <MuiThemeProvider theme={theme}>
        <Grid container alignItems="center">
          <Grid item xs={2}></Grid>
          <Grid item xs={4}>
            <Avatar alt="" src={props.image} className={classes.avatar} />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h7">
              <Box fontWeight="fontWeightBold">{props.position}</Box>
            </Typography>
            <Typography variant="h5">
              <Box fontWeight="fontWeightBold">{props.name}</Box>
            </Typography>
          </Grid>
        </Grid>
      </MuiThemeProvider>
    </div>
  );
};
export default Member;
