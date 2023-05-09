import React from "react";
import moment from "moment";
import articles from "./data";
const Article = ({ title, snippet, date, length }) => {
  console.log(date);
  return (
    <article className="post">
      <h2>{title}</h2>
      <div className="post-info">
        <span>{moment(date).format('dd Do, YYYY')}</span>
        <span>{length} min read</span>
      </div>
      <p>{snippet}</p>
    </article>
  );
};

export default Article;
