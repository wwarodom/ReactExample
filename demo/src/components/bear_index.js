import React, { Component } from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';
// import {Link} from 'react-router-dom';
import {fetchBears} from '../actions';

class BearIndex extends Component {

    componentDidMount() {
        this.props.fetchBears()
    }

    renderBears() {
        return _.map(this.props.bears, bear => {
            return (
                <li className="list-group-item" key={bear.id}>
                    {bear.id+1}. {bear.name}, {bear.weight}
                </li>
            )
        })
    }

    render() {
        return (
            <div>
                <h2> Bear Profile</h2>
                <ul className="list-group">
                    {this.renderBears()}
                </ul>
            </div>
        );
    }

}

function mapStateToProps(state) {
    return { bears: state.bears};
}

export default connect(mapStateToProps, {fetchBears} )(BearIndex);

