import React, { Component } from 'react';
import Card from './card';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {addCard, selectCard, updateCard, deleteCard, moveCard} from '../actions/index';
import {bindActionCreators} from 'redux';

class Col extends Component{

    render(){
        if (this.props.cards.length <= 0) {
            return (
                <div className="well">
                    <h3>{this.props.title}</h3>

                    No cards in column
                    <Card isEditable={true}/>

            </div>);
        }
        const cards = this.props.cards.map(card => (

            <li key={card._id} onClick={() => this.props.selectCard(card)}><Card name={card.name} colId={this._id} label={card.label} isEditable={card.isEditable}/></li>

        ));

        return (
            <div className=" well" draggable={true}>
                <h3>{this.props.title} ({this.props.cards.length})</h3>
                <ul className="list-unstyled">
                    {cards}
                </ul>
                <Card isEditable={true}/>
            </div>
        );
    }
}
Col.propTypes = {
    title : PropTypes.string.isRequired,
    cards : PropTypes.array.isRequired
};

function mapStateToProps(state) {
    return {
        cols : state.cols
    }
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        addCard,
        selectCard},

        dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Col);
