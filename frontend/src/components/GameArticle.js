import React, { useState, useEffect } from "react";
import axios from "axios";

import {} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { theme } from "../theme";

const useStyles = makeStyles((theme) => ({}));

const GameArticle = (props) => {
  const classes = useStyles();
  // const [articles, setArticles] = useState([]);
  // useEffect(() => {
  //   async function fetchData() {
  //     const res = await axios.get(
  //       "http://localhost:8000/api/games/" + props.match.params.id
  //     );
  //     console.log(res.data);
  //     setArticles(res.data);
  //   }
  //   fetchData();
  // }, []);

  return (
    <div>
      {/* <MuiThemeProvider theme={theme}> */}
      {/* {articles.date} */}
      {/* </MuiThemeProvider> */}
    </div>
  );
};

export default GameArticle;
