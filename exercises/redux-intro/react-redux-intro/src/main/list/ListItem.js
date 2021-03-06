import React from 'react';
import {connect} from "react-redux";
import {removeContact} from "../../redux/actions/index";

function ListItem(props) {
    return (
        <div>
            <h2>{props.item.firstName}</h2>
            <h3>{props.item.lastName}</h3>
            <p>{props.item.phone}</p>
        <button onClick={(e) => props.removeContact(props.item.firstName)} className="remove-button" type="button">REMOVE</button>
        </div>
    )
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, {removeContact})(ListItem);
