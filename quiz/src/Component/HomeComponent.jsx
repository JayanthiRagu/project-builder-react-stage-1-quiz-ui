import React, { Component } from 'react';
import './HomeComponent.css';

class HomeComponent extends Component {
    render() {
        return (
            <div className="container">
                <h1>Quiz App</h1>
                <button className="buttons">Play</button>
            </div>
        );
    }
}

export default HomeComponent;