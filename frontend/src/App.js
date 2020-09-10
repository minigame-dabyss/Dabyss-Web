import React, { Fragment, useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import axios from "axios";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Games from "./components/Games";

const App = () => {
  // const [articles, setArticles] = useState([]);
  // useEffect(async () => {
  //   const res = await axios.get("http://localhost:8000/api/articles/");
  //   setArticles(res.data);
  // }, []);
  return (
    <div>
      <Router>
        <div>
          <Header></Header>
          <Route exact path="/" component={Home} />
          <Route path="/Games" component={Games} />
          <Footer></Footer>
        </div>
      </Router>
    </div>
  );
};

export default App;

// <Fragment>
//   {articles.map((article) => (
//     <div>
//       <h1>{article.title}</h1>
//       <p>{article.text}</p>
//     </div>
//   ))}
// </Fragment>
