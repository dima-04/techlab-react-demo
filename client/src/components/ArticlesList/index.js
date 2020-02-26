import React from 'react';
import SingleArticle from "./SingleArticle";

function ArticlesList(props) {
  if (props.articles.length > 0) {
    return (
      <div>
        <h3>{props.header}</h3>
        {props.articles.map(article =>
          <SingleArticle article={article} />)}

      </div>);
  } else {
    return (<h3>No Articles Found</h3>);
  }
}
export default ArticlesList;