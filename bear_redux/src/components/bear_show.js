import React, {Component} from 'react';
import {fetchBears} from '../actions';
import _ from 'lodash';
import {connect} from 'react-redux';
import {deleteBear, getBear} from "../actions/index";


class BearShow extends Component {

    componentDidMount() {
        this.props.fetchBears()
    }

    getBear(id) {
        this.props.getBear(id, (item) => {
                this.props.editBear(item);
                // this.props.fetchBears()
            }
        );
    }

    deleteBear(id) {
        this.props.deleteBear(id, (item) => {
            console.log('item' + item)
            this.props.fetchBears();
        });

    }

    renderBears() {
        return _.map(this.props.bears, bear => {
            if (bear !== null) {
                return (
                    <li className="list-group-item row" key={bear.id}>
                        <div className="col-md-2">
                            {bear.id + 1}. {bear.name}, {bear.weight}
                        </div>
                        <div className="col-md-10">
                            <button className="btn btn-sm btn-primary"
                                    onClick={() => this.getBear(bear.id)}>
                                Edit
                            </button>
                            &nbsp;
                            <button className="btn btn-sm btn-primary"
                                    onClick={() => this.deleteBear(bear.id)}>
                                Delete
                            </button>
                        </div>
                    </li>
                )
            }
            else {
                return ('')
            }

        })
    }


    // ===================  view ==================
    render() {
        return (
            <div>
                <header className="App-header">
                    <h1 className="App-title">Bear</h1>
                </header>
                <section>
                    <ul className="list-group">
                        {this.renderBears()}
                    </ul>
                </section>
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log(state)
    return {bears: state.bears};
}

export default connect(mapStateToProps,
    {deleteBear, getBear, fetchBears})(BearShow);