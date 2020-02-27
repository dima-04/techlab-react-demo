import React, { Component } from "react";
import { toast } from 'react-toastify';
import API from "../utils/API";
import ArticlesList from "../components/ArticlesList";

class Home extends Component {
    state = {
        articles: [],
        header:"Most Recent Tech Articles"
    }

    constructor() {
      super();
      this.handleSave = this.handleSave.bind(this);
    }

    componentDidMount(){
        API.getArticles().then(res => {
          const newState = { ...this.state };
          newState.articles = res.data;
          this.setState(newState);
        }).catch(err => {
          console.log(err);
        });    
    }

    handleSave(event) {
      event.preventDefault();
      const article = JSON.parse(event.target.attributes.getNamedItem("data-object").value);
      article.userId = this.props.user.id;
      API.saveArticle(article).then(res => toast.error("Article Saved!", {position: toast.POSITION.BOTTOM_RIGHT, autoClose:1500}));
    }

    render() {
        return (
            <div>
              <ArticlesList header={this.state.header} articles={this.state.articles} buttonHandler={this.handleSave} buttonText="Save"/>
            </div>
        );
    }
}

export default Home;