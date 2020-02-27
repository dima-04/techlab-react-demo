import React, { Component } from "react";
import API from "../utils/API";
import ArticlesList from "../components/ArticlesList";

class Home extends Component {
    state = {
        articles: [],
        selectedArticles: [],
        selectedPage: 1,
        header:"Most Recent Tech Articles"
    }

    componentDidMount(){
        API.getArticles().then(res => {
          const newState = { ...this.state };
          newState.articles = res.data;
          newState.selectedArticles = res.data.slice(0, 3); // slice((selectPage - 1) * 3, 3)
          newState.selectedPage = 1;
          this.setState(newState);
        }).catch(err => {
          console.log(err);
        });    
    }

    render() {
        return (
            <div>
              <ArticlesList header={this.state.header} articles={this.state.selectedArticles}/>
            </div>
        );
    }
}

export default Home;