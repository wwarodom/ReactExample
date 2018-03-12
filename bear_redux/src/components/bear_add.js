import React, {Component} from 'react';
import {fetchBears, addBear} from '../actions';
import {connect} from "react-redux";

class BearAdd extends Component {

    constructor(props) {
        super(props);
        this.state = {name: '', weight: 0};
    }

    handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        this.setState({[name]: value});

    }

    handlerUpdateBear = (e) => {
        e.preventDefault();
        this.props.addBear(
            this.state.name,
            this.state.weight);
            // ,
            // (item) => {
            //     console.log('item'  + item)
            //     this.props.fetchBears();
            // });
    }

    render() {
        return (
            <div>
                <header className="App-header Space">
                    <h1 className="App-title">Add</h1>
                </header>
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input className="form-control" type="text" name="name" onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="weight">Weight</label>
                        <input className="form-control" type="number" name="weight" onChange={this.handleChange}/>
                    </div>
                    <button onClick={this.handlerUpdateBear}>Add</button>
                </form>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log('mystate:',state);
    return {bears: state.bears};
}

export default connect(mapStateToProps, {fetchBears,addBear})(BearAdd);
