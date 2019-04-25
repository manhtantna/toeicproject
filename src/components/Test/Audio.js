import React, { Component } from 'react'
class Content extends Component {
    constructor(props){
        super(props);
        this.state = {
            play: false
        }
        audio = new Audio(this.props.url)
        
        togglePlay = () => {
            this.setState({ play: !this.state.play }, () => {
                this.state.play ? this.audio.play() : this.audio.pause();
            });
        }
    }
  render() {
    return (
      <div>
          <button onClick={this.togglePlay}>{this.state.play ? 'Pause' : 'Play'}</button>
      </div>
    )
  }
}
export default Content;