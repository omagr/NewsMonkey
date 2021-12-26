import React, { Component } from "react";
import PropTypes from "prop-types";
import { NewsItem } from "./NewsItem";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "./spinner";

export class News extends Component {
  static defaultProps = {
    country: "in",
  };

  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
  };

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults:0
    };
    console.log("hiii");
  }
  async componentDidMount() {
    console.log("hiii2");
    this.setState({ loading: true });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7266212f5c8e4f68ae0b6a2132d6e53b&page=1&pageSize=20`;

    this.setState({ loading: true });

    let data = await fetch(url);
    let pasddata = await data.json();
    console.log(pasddata);

    this.setState({
      articles: pasddata.articles,
      totalresult: pasddata.totalResults,
      loading: false,
      totalResults: 0,
    });
  }
  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    this.setState({ loading: true });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7266212f5c8e4f68ae0b6a2132d6e53b&page=1&pageSize=20`;

    this.setState({ loading: true });

    let data = await fetch(url);
    let pasddata = await data.json();
    console.log(pasddata);

    this.setState({
      articles: this.state.articles.concat(pasddata.articles),
      totalresult: pasddata.totalResults,
      loading: false,
      totalResults: 0,
    });
  };

  render() {
    return (
      <>
        <div className="containera">
          <div id="heading">
            <h1>NewsMonkey</h1>
          </div>
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.lengthc !== this.state.totalresult}
            loader={
              <div className="spinne">
                <div className="spinne">
                  <Spinner />
                </div>
              </div>
            }
          >
            <div className="monica">
              {this.state.articles.map((element) => {
                return (
                  <div className="itemm" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title.slice(0, 50) : ""}
                      description={
                        element.description
                          ? element.description.slice(0, 60)
                          : ""
                      }
                      urlToImage={element.urlToImage}
                      newsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                    />
                  </div>
                );
              })}
            </div>
          </InfiniteScroll>
        </div>
      </>
    );
  }
}

export default News;
