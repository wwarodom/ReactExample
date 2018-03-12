import React, {Component} from 'react';
import axios from 'axios';
import './App.css';

const URL = 'http://localhost/api/bears';

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            bears: [],
            bear : '',
            id: 0, name: '', weight: 0
        }
    }

    componentDidMount() {
        axios.get(URL)
            .then((res) => {
                    this.setState({bears: res.data})
                    console.log(this.state.bears)
                }
            )
            .catch((error) => {
                console.log(error);
            })
    }

    // ================  All methods ===========================


    getBear(id) {
        axios.get(`${URL}/${id}`)
            .then(response => {
                this.setState({bear : response.data})
                this.setState({id: this.state.bear.id})
                this.setState({name: this.state.bear.name})
                this.setState({weight: this.state.bear.weight})
                console.log('get a Bear:' + this.state.bear.name)
            })
    }

    deleteBear(id) {
        axios.delete(`${URL}/${id}`)
            .then( (response) => {
                console.log('Delete:' + response)
                this.getAllBears()  // Get all bear
            })
    }

    renderBears() {
        return (
            this.state.bears.map((bear) => {
                    if (bear !== null)
                        return (
                            <li className="list-group-item" key={bear.id}>
                                {bear.id + 1}: {bear.name} {bear.weight} &nbsp;&nbsp;
                                <button className="btn btn-sm btn-primary"
                                         onClick={()=>this.getBear(bear.id)}>
                                    Edit
                                </button> &nbsp;
                                <button className="btn btn-sm btn-primary"
                                    onClick={()=>this.deleteBear(bear.id)}>
                                    Delete
                                </button>
                            </li>
                        )
                    else
                        return null;
                }
            )
        )
    }

    addBear = (e) => {
           e.preventDefault()
                console.log('add bear' + this.refs.name.value + 'weight ' + this.refs.weight.value)
                axios.post(URL, {
                name: this.refs.name.value,
                weight: this.refs.weight.value
            })
                .then( (response) => {
                console.log('Create a new bear: ' + response);
                this.getAllBears()  // Get all bear
            })
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

    updateBear = (e) => {
        e.preventDefault()

        axios.put(`${URL}/${this.state.id}`, {
            name: this.state.name,
            weight: this.state.weight
            })
            .then( (response) => {
                console.log('Create a new bear: ' + response);
                this.getAllBears()  // Get all bear
        })
    }



    // ===================  view ==================

    render() {
        return (
            <div className="container">
                <header className="App-header">
                    <h1 className="App-title">Bear</h1>
                </header>
                <section>
                    <ul className="list-group">
                        {this.renderBears()}
                    </ul>
                </section>

                <hr/>

                <section>
                    <header className="App-header">
                        <h1 className="App-title">Edit bear</h1>
                    </header>
                    <form onSubmit={this.updateBear}>
                        <div className="form-group">
                            <label>Name: </label>
                            <input type="text" className="form-control"
                                value={this.state.name}
                                onChange={ (e) => this.setState( {name: e.target.value} ) }
                            />
                        </div>
                        <div className="form-group">
                            <label>Weight: </label>
                            <input type="number" className="form-control"
                                value={this.state.weight}
                                onChange={ (e) => this.setState( {weight: e.target.value})}
                            />
                        </div>
                        <input type="hidden" className="form-control"
                               value={this.state.id}
                               onChange={ (e) => this.setState({id:e.target.value})}
                        />
                        <button className="primary">Submit</button>
                    </form>
                </section>

                <hr/>
                <section>
                    <header className="App-header">
                        <h1 className="App-title">Add bear</h1>
                    </header>
                    <form onSubmit={this.addBear}>
                        <div className="form-group">
                            <label>Name: </label>
                            <input type="text" className="form-control" ref="name"/>
                        </div>
                        <div className="form-group">
                            <label>Weight: </label>
                            <input type="number" className="form-control" ref="weight"/>
                        </div>
                        <button className="primary">Submit</button>
                    </form>
                </section>
            </div>


        );
    }
}

export default App;
