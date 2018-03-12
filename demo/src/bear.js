import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';

const URL = 'http://localhost/api/bears';

class Bear extends Component {
    constructor(props){
        super(props)
        this.state = {  bears:   [],
                        bear:    {id: 0, name: '', weight: 0 },
                        id: 0, name: '', weight: 0 }
    }

    componentDidMount() {
        // Get all bears
        this.getAllBears();
    }


    getAllBears() {
        axios.get(URL)
            .then(response => {
                    this.setState({bears: response.data})
                    console.log(response.data)
                }
            )
            .catch( (error) => { console.log(error); })
    }

    renderBears() {
        return _.map(this.state.bears, bear => {
            if ( bear !== null )
                return (
                    <li className="list-group-item" key={bear.id}>
                        {bear.id+1}. {bear.name}, {bear.weight}  &nbsp;
                        <button className="btn btn-sm btn-success"
                                onClick={ () => this.getBear(bear.id)}>
                            Get
                        </button>
                        &nbsp;
                        <button className="btn btn-sm btn-primary"
                                onClick={() => this.deleteBear(bear.id)} >
                            Delete
                        </button>
                    </li>
                )
        })
    }

    getBear(id) {
        axios.get(`http://localhost/api/bears/${id}`)
            .then(response => {
                this.setState({bear : response.data})
                this.setState({id: this.state.bear.id})
                this.setState({name: this.state.bear.name})
                this.setState({weight: this.state.bear.weight})
                console.log('get a Bear:' + this.state.bear.name)
            })
    }

    deleteBear(id) {
        axios.delete(`http://localhost/api/bears/${id}`)
            .then( (response) => {
                console.log('Delete:' + response)
                this.getAllBears()  // Get all bear
            })
    }

   addBear = (e) => {
       e.preventDefault()

       axios.post('http://localhost/api/bears', {
           name: this.refs.bearName.value,
           weight: this.refs.bearWeight.value
       })
           .then( (response) => {
               console.log('Create a new bear: ' + response);
               this.getAllBears()  // Get all bear
           })

    }

   updateBear = (e) => {
       e.preventDefault()

       axios.put(`http://localhost/api/bears/${this.state.id}`, {
           name: this.state.name,
           weight: this.state.weight
       })
           .then( (response) => {
               console.log('Create a new bear: ' + response);
               this.getAllBears()  // Get all bear
           })
    }


    render() {
        return (
            <div>
                <h2> Get all bears</h2>
                <ul className="list-group">
                    {this.renderBears()}
                </ul>

                <hr/>
                <div className="col-md-6">
                    <h2>Add a bear</h2>
                    <form onSubmit={this.addBear}>
                        <div className="form-group">
                            <label>Name:</label>
                            <input className="form-control" type="text"
                                   ref="bearName" defaultValue={'Fredy'}  />
                        </div>
                        <div className="form-group">
                            <label>Weight:</label>
                            <input className="form-control" type="number"
                                   ref="bearWeight" defaultValue={100}    />
                        </div>

                        <div className="form-group">
                            <input className="btn btn-default"
                                   type="submit"
                                   value="Add"
                            />
                        </div>
                     </form>
                </div>

                {/*======================================*/}

                <div className="col-md-6">
                    <h2>Edit a bear</h2>
                    <form onSubmit={this.updateBear}>
                        <div className="form-group">
                            <label>Name:</label>
                            <input className="form-control" type="text"
                                   value={this.state.name}
                                   onChange={(e) => this.setState( {name: e.target.value} )}
                             />
                        </div>
                        <div className="form-group">
                            <label>Weight:</label>
                            <input className="form-control" type="number"
                                   value={this.state.weight}
                                   onChange={(e) => this.setState( {weight: e.target.value} )}/>
                        </div>
                        <div className="form-group">
                            <input className="form-control" type="hidden"
                                   value={this.state.id}
                                   onChange={(e) => this.setState( {id: e.target.value})}/>
                        </div>
                        <div className="form-group">
                            <input className="btn btn-default"
                                   type="submit"
                                   value="Update"
                            />
                        </div>
                    </form>
                </div>

            </div>
        );
    }
}

export default Bear;