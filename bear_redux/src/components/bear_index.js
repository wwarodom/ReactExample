import React, {Component} from 'react';
import BearAdd from './bear_add';
import BearShow from './bear_show';
import BearEdit from './bear_edit';

class BearIndex extends Component {

    constructor(props) {
        super(props);
        this.state = {name: 'warodom', weight: 40};
    }


    editBear = (item) => {
        console.log(item.data.name + item.data.weight);
        this.setState({name: item.data.name, weight: item.data.weight} );
    }

    render() {
        return (
            <div className="container">
                <BearShow  editBear={this.editBear}/>

                <div className="row">
                    <div className="col-md-6">
                        <BearAdd  />
                    </div>
                    <div className="col-md-6">
                        <BearEdit />
                    </div>

                </div>
            </div>
        );
    }
}

export default BearIndex;