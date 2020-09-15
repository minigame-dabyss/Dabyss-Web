import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./components/Home";
import Games from "./components/Games";
import GameArticle from "./components/GameArticle";
import Blog from "./components/Blog";

const App = () => {
  return (
    <Router>
      <div>
        <Header></Header>
        <Route exact path="/" component={Home} />
        <Route exact path="/Games" component={Games} />
        <Route
          exact
          path="/Games/GameArticle/:id"
          render={(props) => <GameArticle {...props} />}
        />
        <Route path="/Blog" component={Blog} />
        <Footer></Footer>
      </div>
    </Router>
  );
};

export default App;
