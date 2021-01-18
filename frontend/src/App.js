import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Terms from "./components/Terms";

import Home from "./components/HomeComponents/Home";
import Games from "./components/GameComponents/Games";
import GameArticle from "./components/GameComponents/GameArticle";
import Blog from "./components/BlogComponents/Blog";
import BlogArticle from "./components/BlogComponents/BlogArticle";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/games" component={Games} />
        <Route
          exact
          path="/games/:id"
          render={(props) => <GameArticle {...props} />}
        />
        <Route exact path="/blog" component={Blog} />
        <Route
          exact
          path="/blog/:id"
          render={(props) => <BlogArticle {...props} />}
        />
        <Route exact path="/privacy-policy" component={PrivacyPolicy} />
        <Route exact path="/terms" component={Terms} />
        <Route component={NotFound}></Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
};

export default App;
