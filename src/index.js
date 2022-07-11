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
        text="Hello!"
      />
      <CommentDetail author="Bob" timeAgo="Today at 01:00 a.m." text="Hi!" />
      <CommentDetail
        author="Carl"
        timeAgo="Today 00:00 a.m."
        text="Hey, guys!"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
