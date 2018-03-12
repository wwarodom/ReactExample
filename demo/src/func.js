import React, {Component} from 'react';

class Func extends Component {

    constructor(props,context) {
        super(props,context)
        this.f6 = this.f6.bind(this);
    }

    f1() { console.log('F1' ) }
    f2() { console.log('F2')  }
    f3 = () => { console.log('F3')  }
    f4 = () => { console.log('F4:' + this.refs.txt4.value) }
    f5() { console.log('F5:' + this.refs.txt5.value)    }
    f6() { console.log('F6' + this.refs.txt6.value)    }
    f7() {  console.log('F7' + this.refs.txt7.value)    }
    f8(str) {  console.log('F8' + str)  }
    f9(str) {  console.log('F9' + str)  }

    render() {
        return (
            <div>
                <h2>Function test </h2>

                Pass f1() to onClick, 'this' is NOT bind
                <div>
                    <input type="text" ref="txt1" defaultValue={'F1 text'} />
                    <button onClick={this.f1}> F1 </button>
                </div>

                f2() is called during render process, nothing happen when clicked
                <div>
                    <input type="text" ref="txt2" defaultValue={'F2 text'} />
                    <button onClick={this.f2()}> F2 </button>
                </div>

                f3() is called during render process, nothing happen when clicked, 'this' is NOT bind
                <div>
                    <input type="text" ref="txt3" defaultValue={'F3 text'}/>
                    <button onClick={this.f3()}> F3 </button>
                </div>

                Pass f4 (point to anonymous function) to on Click, 'this' is bind automatically
                <div>
                    <input type="text" ref="txt4" defaultValue={'F4 text'}/>
                    <button onClick={this.f4}> F4 </button>
                </div>

                Pass anonymous object which is consisted of f5(), 'this' is bind automatically
                <div>
                    <input type="text" ref="txt5" defaultValue={'F5 text'}/>
                    <button onClick={() => this.f5()}> F5 </button>
                </div>

                Pass f6() to onClick, bind 'this' in constructor
                <div>
                    <input type="text" ref="txt6" defaultValue={'F6 text'} />
                    <button onClick={this.f6}  > F6 </button>
                </div>

                Pass f7() to onClick, bind 'this' in onClick
                <div>
                    <input type="text" ref="txt7" defaultValue={'F7 text'} />
                    <button onClick={this.f7.bind(this)}> F7 </button>
                </div>

                Pass f8() to onClick, bind 'this' in onClick
                <div>
                    <input type="text" ref="txt8" defaultValue={'F8 text'} />
                    <button onClick={this.f8.bind(this,'Foo')}> F8 </button>
                </div>

                Pass f9() to onClick, bind 'this' in onClick
                <div>
                    <input type="text" ref="txt8" defaultValue={'F9 text'} />
                    <button onClick={(e) => this.f9('Bar',e)}> F9 </button>
                </div>
            </div>
        )
    }
}

export default Func;


