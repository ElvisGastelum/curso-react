import React, { Component } from 'react';

class SuperVideo extends Component {
    state = {
        video: {
            title: 'Super Video',
            likes: 0
        }
    }


    add = () => {
        this.setState(state => ({
            ...state,
            video: {
                ...state.video,
                likes: state.video.likes + 1
            }
        }))
    }

    render() {
        return (
            <div>
                <h2>{this.state.video.title}</h2>
                <button onClick={this.add}>Like</button>
                <p>Likes: {this.state.video.likes}</p>
            </div>
        )
    }


}

export default SuperVideo