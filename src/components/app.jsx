import React, {Component} from 'react';
import giphy from 'giphy-api'; 
import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            gifs: [],
            selectedGifId: "wHc92cHADhpLi"
        }
    }

    search = (query) => {
        giphy("LSCMrRAqJPhhI10InqGRRlV1cuEpPtkX").search({
            q: query,
            rating: 'g',
            limit: 10
        }, (error, result) => {
            this.setState({
                gifs: result.data
            })
        });
    }

    handleSelectedGif = (gifId) => {
        this.setState({
            selectedGifId: gifId,
        })
    }

    render() {
        return (
            <div>   
                <div className="left-scene">
                    <SearchBar searchFunction={this.search}/>
                    <div className= "selected-gif">
                        < Gif id={this.state.selectedGifId} handleSelectedGif={this.handleSelectedGif}/>
                    </div>
                </div>
                <div className="right-scene">
                    <GifList handleSelectedGif={this.handleSelectedGif}
                    gifs={this.state.gifs}
                    />
                </div>
            </div>
        )
    }

}

export default App;
