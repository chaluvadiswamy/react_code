import cx from 'classnames';
import { Component } from 'react';

export default class Counter extends Component {
    constructor(props){
        super(props);
        this.state = {
            count : 0
        }
    }
    handlerClick =()=>{
     return this.state.count += this.state.count;
    }
    render() {
        return (
            <>
                <div>
                    <h2>Counter : {this.state.count}</h2>
                    <button onClick={handlerClick}>Click</button>
                </div>
                <style>{`
                    .counter-button {
                        font-size: 1rem;
                        padding: 5px 10px;
                        color:  #585858;
                    }
                `}</style>
            </>
        );
    }
}
