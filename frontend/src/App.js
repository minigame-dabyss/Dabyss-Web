import React, { Fragment } from "react";

const App = () => {
  const posts = [
    {
      id: 1,
      title: "仮データ1",
      description: "仮テキストです。",
    },
    {
      id: 2,
      title: "仮データ2",
      description: "仮テキストです。仮テキストです。",
    },
    {
      id: 3,
      title: "仮データ3",
      description: "仮テキストです。仮テキストです。仮テキストです。",
    },
  ];

  return (
    <Fragment>
      {posts.map((post) => (
        <div key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.description}</p>
        </div>
      ))}
    </Fragment>
  );
};

export default App;
