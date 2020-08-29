import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const App = () => {
  const [articles, setArticles] = useState([]);
  useEffect(async () => {
    const res = await axios.get("http://localhost:8000/api/articles/");
    setArticles(res.data);
  }, []);
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography>
            <img src="./logo_Dabyss.png" width="50px" height="50px" />
            MinigameDabyss
          </Typography>
          <Button color="inherit">ゲーム一覧</Button>
          <Button color="inherit">ブログ</Button>
          <Button color="inherit">お問い合わせ</Button>
        </Toolbar>
      </AppBar>
      <Fragment>
        {articles.map((article) => (
          <div>
            <h1>{article.title}</h1>
            <p>{article.text}</p>
          </div>
        ))}
      </Fragment>
    </div>
  );
};

export default App;
