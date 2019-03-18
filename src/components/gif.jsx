import React, {Component} from 'react';

class Gif extends Component {
    render(){
        const src = `https://media3.giphy.com/media/${this.props.id}/giphy.gif`;

        return(
            <img src={src} alt="" className="gif" onClick ={() => this.props.handleSelectedGif(this.props.id)}/>
        );
    }
}

export default Gif;