import React from "react";
import { Grid, Avatar, Typography, Box } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import { MuiThemeProvider } from "@material-ui/core/styles";
import { theme } from "../../theme";

const useStyles = makeStyles((theme) => ({
  member: {
    padding: theme.spacing(4),
  },
  avatar: {
    width: 150,
    height: 150,
    marginRight: theme.spacing(2),
  },
}));

const Member = (props) => {
  const classes = useStyles();

  return (
    <div>
      <MuiThemeProvider theme={theme}>
        <Grid container alignItems="center" className={classes.member}>
          <Grid item>
            <Avatar
              alt="メンバー画像"
              src={props.image}
              className={classes.avatar}
            />
          </Grid>
          <Grid item>
            <Typography variant="body1">{props.position}</Typography>
            <Typography variant="h6">
              <Box fontWeight="fontWeightBold">{props.name}</Box>
            </Typography>
          </Grid>
        </Grid>
      </MuiThemeProvider>
    </div>
  );
};
export default Member;
