import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './search_bar';
import GifList from './gif_list';
import Gif from './gif';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifIds: [],
      selectGifId: "xT9IgDEI1iZyb2wqo8"
    };
  }

  fetchGifIds = (query) => {
    giphy().search({
      q: query,
      rating: 'g',
      limit: 10
    }).then((response) => {
      const newIds = response.data.map(data => data.id);
      this.setState({ gifIds: newIds });
    });
  }

  selectGif = (id) => {
    this.setState({ selectGifId: id });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar fetchGifIds={this.fetchGifIds} />
          <div className="selected-gif">
            <Gif id={this.state.selectGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifIds={this.state.gifIds} selectGif={this.selectGif} />
        </div>
      </div>
    );
  }
}

export default App;
