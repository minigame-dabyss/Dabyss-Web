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
  bottom: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
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
        <Grid container className={classes.bottom}>
          <Grid item xs={1}></Grid>
          <Grid item xs={5}>
            <Member
              image="./members/hanzawa.webp"
              position="本部 営業第二部第一グループ 次長"
              name="半沢直樹"
            ></Member>
          </Grid>
          <Grid item xs={5}>
            <Member
              image="./members/oowada.jpeg"
              position="取締役"
              name="大和田暁"
            ></Member>
          </Grid>
          <Grid item xs={1}></Grid>
        </Grid>
        <Grid container className={classes.bottom}>
          <Grid item xs={1}></Grid>
          <Grid item xs={5}>
            <Member
              image="./members/tomari.jpeg"
              position="本部 融資部企画グループ 次長"
              name="渡真利忍"
            ></Member>
          </Grid>
          <Grid item xs={5}>
            <Member
              image="./members/kurosaki.jpg"
              position="金融庁監督局担当検査官"
              name="黒崎駿一"
            ></Member>
          </Grid>
          <Grid item xs={1}></Grid>
        </Grid>
      </MuiThemeProvider>
    </div>
  );
};
export default Members;
