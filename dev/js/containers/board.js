import React, {Component} from "react";
import {connect} from "react-redux";
import Col from "./col";
import {bindActionCreators} from "redux";
import {addCol, selectColumn} from "../actions/index";
class Board extends Component {

    render() {

        if (this.props.cols <= 0) {
            return <div>No data</div>
        }

        const cols = this.props.cols.map(col => (

            <li onClick={() => this.props.selectColumn(col)}
                key={col._id}><Col title={col.title} cards={col.cards}/></li>

        ));

        return (
            <ul className="list-unstyled list-inline">
                {cols}
            </ul>
        );
    }
}
function mapStateToProps(state) {
    return {
        cols: state.cols
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({addCol, selectColumn}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Board);
