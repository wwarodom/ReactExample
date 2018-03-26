import React, { Component } from 'react';

// import Profile from "./profile";
import Bear from "./bear";
// import Func from "./func";

// class Foo extends Component {
//     render() {
//         return (
//             <div>
//                 <h3> Foo: {this.props.name}  </h3>
//                 {this.props.fooState}
//             </div>
//         )
//     }
// }

class App extends Component {

    constructor(props){
        super(props)
        this.state = { fooState: "Foo State", data: '' }
        // this.updateMessage = this.updateMessage.bind(this)
    }


    updateMessage = (e) => {
        this.setState( {fooState: "New Foo State: "  + e.target.value })
    }


    render() {
        return (
            <div className="container">
                {/*<div>*/}
                    {/*Message:*/}
                    {/*<input type='text' onChange={this.updateMessage}/> <br/>*/}
                    {/*{this.state.fooState} <br/>*/}
                {/*</div>*/}
                {/*<Foo*/}
                    {/*name="FooName"*/}
                    {/*fooState={this.state.fooState}*/}
                    {/*updateMessage={this.updateMessage.bind(this)}*/}
                {/*/>*/}
                {/*<Profile/>*/}
                <Bear/>
                {/*<Func/>*/}
            </div>
        );
    }
}

export default App;
  