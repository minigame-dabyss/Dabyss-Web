import React from "react";
import TopGames from "./TopGames";
import Hero from "./Hero";
// import Members from "./Members";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Hero></Hero>
        <TopGames></TopGames>
        {/* <Members></Members> */}
      </div>
    );
  }
}

export default Home;
