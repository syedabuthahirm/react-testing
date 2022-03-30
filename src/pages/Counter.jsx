import React from 'react'
import { connect, useDispatch } from 'react-redux'
import { increment, incrementBy, decrement } from '../store/action-reducers/counter';
import { bindActionCreators } from 'redux';

function Counter(props) {
    const dispatch = useDispatch();
    const navigateToUserPage = () => {
        props.history.push({
            path: `/users?userId=${props.currentCounter}`
        });
    }
    return (
        <div>
            <h1 data-testid="counterLabel">Current Value {props.currentCounter}</h1>
            <button data-testid="incrementBtn" onClick={() => dispatch(increment())}>
                Increment By 1
            </button>
            <button data-testid="decrementBtn" onClick={props.decrement}>
                Decrement By 1
            </button>
            <button data-testid="navigateToUser" onClick={navigateToUserPage}>
                Go to User Page
            </button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        currentCounter: state.counter.value
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        increment,
        decrement
    }, dispatch);
}

export default connect(mapStateToProps, null)(Counter);