import React, { Component } from 'react';
import axios from 'axios';

const USER = 'wwarodom';

class Profile extends Component {

    constructor(props){
        super(props)
        this.state = {  data: {} }
    }

    componentDidMount() {
        axios.get(`https://api.github.com/users/${USER}`)
            .then(response => {
                    this.setState({data : response.data})
                    console.log(response.data)
                }
            )
    }

    render() {
        const dataOption = Object.keys(this.state.data)
            .map( (key,index) =>
                <option value={index}>
                    {index+1 +'. ' +key+ ': '  + this.state.data[key]}
                </option>
            )

        return (
            <div>
                    <h2> Github Profile</h2>
                    <ul>
                        <li>{this.state.data.url}</li>
                        <li>{this.state.data.login}</li>
                        <li>{this.state.data['blog']}</li>
                    </ul>

                    <dd><select>{dataOption}</select></dd>
            </div>
        );
    }
}

export default Profile;