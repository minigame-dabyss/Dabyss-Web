import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";

import Header from "./components/Header";
import Footer from "./components/Footer";
import TopGames from "./components/TopGames";
// import GameCard from "./components/GameCard";
import Hero from "./components/Hero";

const App = () => {
  const [articles, setArticles] = useState([]);
  useEffect(async () => {
    const res = await axios.get("http://localhost:8000/api/articles/");
    setArticles(res.data);
  }, []);
  return (
    <div>
      <Header></Header>
      <Hero></Hero>
      <TopGames></TopGames>
      <Fragment>
        {articles.map((article) => (
          <div>
            <h1>{article.title}</h1>
            <p>{article.text}</p>
          </div>
        ))}
      </Fragment>
      <Footer></Footer>
    </div>
  );
};

export default App;
