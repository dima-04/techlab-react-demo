import React from 'react';
import { Row, Col, Button } from 'react-materialize';

function SingleArticle(props) {
  return (
    <div>      
      <Row>
        <Col s={8}>
          <h5>{props.article.title}</h5>
        </Col>
        <Col s={4}>
          <a style={{marginRight: '5px'}} target="_blank" rel={props.article.link} href={props.article.link}>
            <Button variant="primary">View</Button> 
          </a>
          <Button variant="primary" onClick={props.buttonHandler} data-object={JSON.stringify(props.article)}>{props.buttonText}</Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>{props.article.summary}</p>
        </Col>
      </Row>
      </div>
  );
}
export default SingleArticle;