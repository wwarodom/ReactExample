import React, {Component} from 'react'
import axios from'axios'; 

const URL = 'http://localhost:3000/node/flights';
// const URL = 'http://128.199.76.176:3000/node/flights';

export const getAllflights = () => {
	return axios.get(URL)
		.then( function(result) {
			return { 
				repos: result.data.flights 
			}
		})		
}
 

class Flight extends Component {	
 
    constructor(props) {
        super(props);
        this.state = { flights : [] };
        // getAllflights().then( data => data.repos.map( 
        // 				item => console.log(item) 
        // 			) 
        // 		)
 
 		getAllflights().then( 
			(data) => {
				this.setState( { flights : data.repos })
			}
		)


     }

    renderFlight(item) {
    	return (
    		<tr key={item.id}>
    			<td>{item.id}</td>
    			<td>{item.name}</td>
    			<td>{item.airline}</td>
    		</tr>
    	);
    }

	render() { 
 
		return (
			<div> 
				<div align="center"> <h2 class="jumbotron">Flight Database  </h2> </div>
				<table class="table table-hover">
					<thead>	
						<tr>
						 	<th>id</th>
						 	<th>Name</th>
						 	<th>Flight</th>					 	 
						</tr>						
					</thead>
					<tbody> 
						{this.state.flights.map( this.renderFlight )}
					</tbody>
				</table>
			</div>
		);
	}

}

export default Flight