import React, { useState, useEffect } from "react";
import axios from "axios";

import { Link } from "react-router-dom";

import {
  Grid,
  TextField,
  InputAdornment,
  Typography,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Hidden,
  Box,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

import { makeStyles } from "@material-ui/core/styles";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { theme } from "../../theme";

const useStyles = makeStyles((theme) => ({
  title: {
    paddingTop: theme.spacing(4),
    // paddingBottom: theme.spacing(4),
  },
  root: {
    justifyContent: "center",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  inputRoot: {
    marginLeft: theme.spacing(6),
  },
  card: {
    width: 740,
    margin: theme.spacing(2),
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
  spCard: {
    margin: theme.spacing(2),
  },
  spCardActionArea: {
    padding: theme.spacing(2),
    paddingBottom: theme.spacing(0),
  },
  spMedia: {
    height: 120,
    width: 180,
    margin: "0 auto",
  },
  spCardContent: {
    padding: theme.spacing(0),
    paddingTop: theme.spacing(2),
  },
  inputRoot: {
    marginTop: theme.spacing(2),
  },
}));

const Blog = () => {
  const classes = useStyles();
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const res = await axios.get("http://localhost:8000/api/blog/");
      console.log(res.data);
      setArticles(res.data);
    }
    fetchData();
  }, []);
  return (
    <div>
      <MuiThemeProvider theme={theme}>
        <Grid container justify="center" className={classes.title}>
          <Typography variant="h4">
            <Box fontWeight="fontWeightBold">ブログ</Box>
          </Typography>
        </Grid>
        <Grid container className={classes.root}>
          {/* ここからPC/タブレット画面 */}
          <Hidden xsDown implementation="css">
            <Grid item>
              {articles
                .slice(0)
                .reverse()
                .map((article, index) => (
                  <div key={index}>
                    <Link to={`/Blog/${article.id}`}>
                      <Card
                        className={classes.card}
                        elevation={0}
                        variant="outlined"
                      >
                        <CardActionArea className={classes.CardActionArea}>
                          <Typography
                            gutterBottom
                            variant="body1"
                            className={classes.date}
                          >
                            {article.date}
                          </Typography>
                          <Grid container alignItems="center">
                            <Grid item xs={3}>
                              <CardMedia
                                className={classes.media}
                                image={article.sumnail}
                                title="Contemplative Reptile"
                              />
                            </Grid>
                            <Grid item xs={9}>
                              <CardContent className={classes.CardContent}>
                                <Typography gutterBottom variant="h5">
                                  {article.title}
                                </Typography>
                                {/* <Typography
                                gutterBottom
                                variant="body2"
                                color="textSecondary"
                                component="p"
                              >
                                #Machine Learning
                              </Typography> */}
                                <Typography variant="body2" component="p">
                                  Author:{article.author}
                                </Typography>
                              </CardContent>
                            </Grid>
                          </Grid>
                        </CardActionArea>
                      </Card>
                    </Link>
                  </div>
                ))}
            </Grid>
          </Hidden>
          {/* ここからsp画面 */}
          <Hidden smUp implementation="css">
            <Grid item>
              {articles
                .slice(0)
                .reverse()
                .map((article, index) => (
                  <div key={index}>
                    <Link to={`/Blog/${article.id}`}>
                      <Card
                        className={classes.spCard}
                        elevation={0}
                        variant="outlined"
                      >
                        <CardActionArea className={classes.spCardActionArea}>
                          <Typography
                            gutterBottom
                            variant="body2"
                            className={classes.date}
                          >
                            {article.date}
                          </Typography>
                          <Grid container direction="column">
                            <Grid item>
                              <CardMedia
                                className={classes.spMedia}
                                image={article.sumnail}
                                title="Contemplative Reptile"
                              />
                            </Grid>
                            <Grid item>
                              <CardContent className={classes.spCardContent}>
                                <Typography gutterBottom variant="h6">
                                  {article.title}
                                </Typography>
                                {/* <Typography
                                gutterBottom
                                variant="body2"
                                color="textSecondary"
                                component="p"
                                >
                                #Machine Learning
                              </Typography> */}
                                <Typography variant="body2" component="p">
                                  Author:{article.author}
                                </Typography>
                              </CardContent>
                            </Grid>
                          </Grid>
                        </CardActionArea>
                      </Card>
                    </Link>
                  </div>
                ))}
            </Grid>
          </Hidden>
          <Grid item>
            <TextField
              id="input-with-icon-textfield"
              label="記事を検索"
              variant="outlined"
              className={classes.inputRoot}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon color="action" />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        </Grid>
      </MuiThemeProvider>
    </div>
  );
};

export default Blog;
