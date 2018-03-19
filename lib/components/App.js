import React from 'react';

import { data } from '../testData.json';
import DataApi from '../DataApi';
import ArticleList from './ArticleList';

const api = new DataApi(data);

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      authors: [],
    };
  }

  async componentDidMount() {
    this.setState({
      articles: await api.getArticles(),
      authors: await api.getAuthors()
    });
  }

  articleActions = {
    lookupAuthors: authorId => this.state.authors[authorId],
  };

  render() {
    return (
      <ArticleList 
        articles={this.state.articles} 
        articleActions={this.articleActions}
      />
    );
  }
}

export default App;
