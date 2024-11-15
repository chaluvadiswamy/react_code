import React, { Component } from 'react';

export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    // Arrow function syntax automatically binds 'this'
    handleClick = () => {
        // Update state correctly using setState
        this.setState(prevState => ({
            count: prevState.count + 1
        }));
    };

    render() {
        return (
            <>
                <div>
                    <h2>Counter: {this.state.count}</h2>
                    {/* Correctly bind handleClick to the button's onClick */}
                    <button onClick={this.handleClick}>Click</button>
                </div>
                {/* Use className for styling in React */}
                <style>{`
                    .counter-button {
                        font-size: 1rem;
                        padding: 5px 10px;
                        color: #585858;
                    }
                `}</style>
            </>
        );
    }
}
