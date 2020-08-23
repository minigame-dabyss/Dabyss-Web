import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [articles, setArticles] = useState([]);
  useEffect(async () => {
    const res = await axios.get("http://localhost:8000/api/articles/");
    setArticles(res.data);
  }, []);
  return (
    <Fragment>
      {articles.map((article) => (
        <div>
          <h1>{article.title}</h1>
          <p>{article.text}</p>
        </div>
      ))}
    </Fragment>
  );
};

export default App;
