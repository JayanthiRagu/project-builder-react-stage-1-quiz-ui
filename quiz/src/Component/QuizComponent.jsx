import React, { Component } from 'react';
import './QuizComponent.css'

class QuizComponent extends Component {
    render() {
        return (
            <div className="container1">
                <div className="quiz">
                    <span className="title">Questions</span>
                    <div className="question">
                        <span className="outof">4 out of 15</span>
                        <span>What is your name</span>
                    </div>
                    <div>
                        <button className="button">Option A</button>
                        <button className="button">Option B</button>
                    </div>
                    <div>
                        <button className="button">Option C</button>
                        <button className="button">Option D</button>
                    </div>
                    <div>
                        <button className="button1">Previous</button>
                        <button className="button2">Next</button>
                        <button className="button3">Quit</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default QuizComponent;