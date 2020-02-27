import React, { Component } from "react";
import API from "../utils/API";
import ArticlesList from "../components/ArticlesList";

class MyArticles extends Component {
    state = {
        articles: [],
        header:"Saved Articles!!"
    }

    constructor() {
      super();
      this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount(){
        API.getSavedArticles(this.props.user.id).then(res => {
          const newState = { ...this.state };
          newState.articles = res.data;
          this.setState(newState);
        }).catch(err => {
          console.log(err);
        });    
    }

    handleDelete(event) {
      event.preventDefault();
      const article = JSON.parse(event.target.attributes.getNamedItem("data-object").value);
      const userId = this.state.userId;
      API.deleteArticle(article._id).then(response => {
        API.getSavedArticles(userId)
          .then(response => {
            const newState = { ...this.state };
            newState.articles = response.data;
            newState.selectedArticles = response.data;
            this.setState(newState);
          });
  
      })
    }

    render() {
        return (
            <div>
              <ArticlesList header={this.state.header} articles={this.state.articles} buttonHandler={this.handleDelete} buttonText="Delete"/>
            </div>
        );
    }
}

export default MyArticles;