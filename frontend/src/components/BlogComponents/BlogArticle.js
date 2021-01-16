import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import CodeBlock from "./CodeBlock.tsx";

import { Grid, Typography, Hidden } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { theme } from "../../theme";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "auto",
    maxWidth: 820,
    padding: theme.spacing(2),
  },
  date: {
    marginTop: theme.spacing(4),
  },
  title: {
    fontWeight: "Bold",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  img: {
    width: "auto",
    height: "auto",
    maxWidth: "100%",
    objectFit: "cover",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  PCtext: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(4),
    "& a": {
      borderBottom: "1px solid",
      transitionDuration: "0.2s",
    },
    "& a:hover": {
      opacity: "0.5",
    },
  },
  SPtext: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(4),
    "& a": {
      borderBottom: "1px solid",
      transitionDuration: "0.2s",
    },
    "& a:hover": {
      opacity: "0.5",
    },
    // h1-h5
    "& h1": {
      fontSize: "1.5rem",
    },
    // h2-h6
    "& h2": {
      fontSize: "1.25rem",
    },
    // h3-body1
    "& h3": {
      fontSize: "1rem",
    },
    // h4-body2
    "& h4": {
      fontSize: "0.875rem",
    },
  },
}));

const BlogArticle = (props) => {
  const classes = useStyles();
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/blog/${props.match.params.id}/`
      );
      console.log(res.data);
      setArticles(res.data);
    }
    fetchData();
  }, [props.match.params.id]);
  const markdown = articles.text;
  return (
    <div>
      {/* スマホ画面以外 */}
      <Hidden xsDown implementation="css">
        <MuiThemeProvider theme={theme}>
          <Grid container direction="column" className={classes.root}>
            <Typography variant="body1" className={classes.date}>
              {articles.date}
            </Typography>
            <Typography variant="h3" className={classes.title}>
              {articles.title}
            </Typography>
            <Typography variant="body1" className={classes.author}>
              Author:{articles.author}
            </Typography>
            <img
              src={articles.sumnail}
              alt="ブログのサムネイル"
              className={classes.img}
            ></img>
            <ReactMarkdown
              source={markdown}
              className={classes.PCtext}
              renderers={{ code: CodeBlock }}
            />
          </Grid>
        </MuiThemeProvider>
      </Hidden>
      {/* スマホ画面 */}
      <Hidden smUp implementation="css">
        <MuiThemeProvider theme={theme}>
          <Grid container direction="column" className={classes.root}>
            <Typography variant="body2" className={classes.date}>
              {articles.date}
            </Typography>
            <Typography variant="h5" className={classes.title}>
              {articles.title}
            </Typography>
            <Typography variant="body2" className={classes.author}>
              Author:{articles.author}
            </Typography>
            <img
              src={articles.sumnail}
              alt="ブログのサムネイル"
              className={classes.img}
            ></img>
            <ReactMarkdown
              source={markdown}
              className={classes.SPtext}
              renderers={{ code: CodeBlock }}
            />
          </Grid>
        </MuiThemeProvider>
      </Hidden>
    </div>
  );
};

export default BlogArticle;
