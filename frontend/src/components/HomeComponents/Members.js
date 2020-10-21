import React from "react";
import Member from "./Member";

import { Grid, Typography, Box } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import { MuiThemeProvider } from "@material-ui/core/styles";
import { theme } from "../../theme";

const useStyles = makeStyles((theme) => ({
  title: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  avatar: {
    width: 150,
    height: 150,
  },
  members: {
    marginBottom: theme.spacing(2),
    padding: theme.spacing(2),
    justifyContent: "center",
  },
}));

const Members = () => {
  const classes = useStyles();

  return (
    <div>
      <MuiThemeProvider theme={theme}>
        <Grid container justify="center" className={classes.title}>
          <Typography variant="h4">
            <Box fontWeight="fontWeightBold">運営チーム</Box>
          </Typography>
        </Grid>
        <Grid container className={classes.members}>
          <Grid item>
            <Member
              image="./members/hanzawa.webp"
              position="Engineer"
              name="半沢直樹"
            ></Member>
          </Grid>
          <Grid item>
            <Member
              image="./members/oowada.jpeg"
              position="Engineer"
              name="大和田暁"
            ></Member>
          </Grid>
          <Grid item>
            <Member
              image="./members/tomari.jpeg"
              position="Designer"
              name="渡真利忍"
            ></Member>
          </Grid>
          <Grid item>
            <Member
              image="./members/kurosaki.jpg"
              position="Business"
              name="黒崎駿一"
            ></Member>
          </Grid>
        </Grid>
      </MuiThemeProvider>
    </div>
  );
};
export default Members;
