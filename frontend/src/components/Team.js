import React from "react";
import { Grid, Avatar, Typography, Box } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import { MuiThemeProvider } from "@material-ui/core/styles";
import { theme } from "../theme";

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

const Team = () => {
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
            <Grid container alignItems="center">
              <Grid item xs={2}></Grid>
              <Grid item xs={4}>
                <Avatar
                  alt=""
                  src="./members/hanzawa.webp"
                  className={classes.avatar}
                />
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h7">
                  <Box fontWeight="fontWeightBold">
                    本部 営業第二部第一グループ 次長
                  </Box>
                </Typography>
                <Typography variant="h5">
                  <Box fontWeight="fontWeightBold">半沢直樹</Box>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={5}>
            <Grid container alignItems="center">
              <Grid item xs={2}></Grid>
              <Grid item xs={4}>
                <Avatar
                  alt=""
                  src="./members/oowada.jpeg"
                  className={classes.avatar}
                />
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h7">
                  <Box fontWeight="fontWeightBold">取締役</Box>
                </Typography>
                <Typography variant="h5">
                  <Box fontWeight="fontWeightBold">大和田暁</Box>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={1}></Grid>
        </Grid>
        <Grid container className={classes.bottom}>
          <Grid item xs={1}></Grid>
          <Grid item xs={5}>
            <Grid container alignItems="center">
              <Grid item xs={2}></Grid>
              <Grid item xs={4}>
                <Avatar
                  alt=""
                  src="./members/tomari.jpeg"
                  className={classes.avatar}
                />
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h7">
                  <Box fontWeight="fontWeightBold">
                    本部 融資部企画グループ 次長
                  </Box>
                </Typography>
                <Typography variant="h5">
                  <Box fontWeight="fontWeightBold">渡真利忍</Box>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={5}>
            <Grid container alignItems="center">
              <Grid item xs={2}></Grid>
              <Grid item xs={4}>
                <Avatar
                  alt=""
                  src="./members/kurosaki.jpg"
                  className={classes.avatar}
                />
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h7">
                  <Box fontWeight="fontWeightBold">金融庁監督局担当検査官</Box>
                </Typography>
                <Typography variant="h5">
                  <Box fontWeight="fontWeightBold">黒崎駿一</Box>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={1}></Grid>
        </Grid>
      </MuiThemeProvider>
    </div>
  );
};
export default Team;
