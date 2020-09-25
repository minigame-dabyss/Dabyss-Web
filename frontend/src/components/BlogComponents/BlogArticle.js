import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import CodeBlock from "./CodeBlock.tsx";

import { Grid, Typography } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { theme } from "../../theme";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "auto",
    maxWidth: 820,
  },
  date: {
    marginTop: theme.spacing(4),
    // marginBottom: theme.spacing(2),
  },
  title: {
    fontWeight: "Bold",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  author: {
    // marginTop: theme.spacing(2),
    // marginBottom: theme.spacing(2),
  },
  img: {
    width: "100%",
    maxHeight: 500,
    objectFit: "cover",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  text: {
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
}));

const BlogArticle = (props) => {
  const classes = useStyles();
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(
        "http://localhost:8000/api/blog/" + props.match.params.id
      );
      console.log(res.data);
      setArticles(res.data);
    }
    fetchData();
  }, []);
  const markdown = articles.text;
  return (
    <div>
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
          <img src={articles.sumnail} className={classes.img}></img>
          <ReactMarkdown
            source={markdown}
            className={classes.text}
            renderers={{ code: CodeBlock }}
          />
        </Grid>
      </MuiThemeProvider>
    </div>
  );
};

export default BlogArticle;
