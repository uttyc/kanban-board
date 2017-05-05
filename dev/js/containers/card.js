import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import {addCard} from '../actions/index';
class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            colId: 0,
            label: {
                name: '',
                color: ''
            }
        };
        this.addCard = this.addCard.bind(this);
    }

    addCard(e) {

        e.preventDefault();
        const card = {
            _id: uuid.v4(),
            name: this.refs.name.value,

            label: {
                name: this.refs.labelName.value,
                color: this.props.label.color
            }

        };
       addCard(card);
    }

    handleColorChange(e) {
        this.props.label.color = e.target.value;
    }

    handleColumnChange(e) {
        this.props.colId = e.target.value;
    }

    render() {
        const isEditable = this.props.isEditable;
        const inputStyle = {
            width: '100%'
        };
        if (isEditable) {
            return (
                <form className="card well" draggable={false} id="form-card">
                    <input type="text" placeholder="Card Name" className="form-control" style={inputStyle} ref="name"/>
                    <input type="text" placeholder="Description" className="form-control" style={inputStyle}
                           ref="desc"/>
                    <input type="text" placeholder="Label" className="form-control" style={inputStyle} ref="labelName"/>
                    <span>
                        <select className="form-control" onChange={this.handleColorChange.bind(this)}>
                            <option value="text-success">Green</option>
                            <option value="text-warning">Yellow</option>
                            <option value="text-danger">Red</option>
                        </select>
                    </span>

                    <button className="btn btn-success" style={inputStyle} onClick={this.addCard}>Add</button>
                </form>
            );
        } else {
            return (
                <div className="card well" draggable={true}>
                    <h3>{this.props.name}</h3>
                    <p>{this.props.desc}</p>
                    <p color={this.props.label.color}>{this.props.label.name}</p>
                    <hr />
                    <button className="glyphicon glyphicon-edit" onClick={this.props.updateCard}/>
                    <button className="glyphicon glyphicon-remove-sign"/>
                </div>


            );
        }
    }

}
Card.propTypes = {
    name: PropTypes.string,
    colId: PropTypes.number,
    label: PropTypes.shape({
        name: PropTypes.string,
        color: PropTypes.string
    }),
    isEditable: PropTypes.bool.isRequired

};
Card.defaultProps = {
    label: {
        name: "lbl",
        color: "text-success"
    }
};
export default Card;
