import React from 'react';
import Board from '../containers/board';
import Card from '../containers/card';
import {addCol} from '../actions';
import uuid from 'uuid';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
require('../../scss/style.scss');

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            name: ''
        };
    }
    addColumn(e){
        e.preventDefault();
        const title = this.refs.colTitle.value;
        const col = {
            _id : uuid.v4(),
            title,
            cards : []
        };

        addCol(col);
    }


    render(){
        return (
            <div className="container">
                <h1 className="logo">KanBan Board</h1>
                <hr />
                <div className="row">
                    <form className="input-group col-md-3 pull-left" >
                        <input type="text" placeholder="Add Column" className="form-control" ref='colTitle'/>
                        <span className="input-group-btn">
							<button className="input-group btn btn-primary" onClick={this.addColumn.bind(this)}>Add</button>
						</span>
                    </form>
                    <div className="pull-right">
                        <Card name={"card name"} label={{name: "label", color : "text-success"}} isEditable={true}/>
                    </div>
                </div>
                <hr />
                <Board/>

            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        cols : state.cols
    }
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators({addCol}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(App);