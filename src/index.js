import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Alice"
        timeAgo="Today at 03:00 a.m."
        content="Hello!"
        avatar={faker.image.image()}
      />
      <CommentDetail
        author="Bob"
        timeAgo="Today at 01:00 a.m."
        content="Hi!"
        avatar={faker.image.image()}
      />
      <CommentDetail
        author="Carl"
        timeAgo="Today 00:00 a.m."
        content="Hey, guys!"
        avatar={faker.image.image()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
