import React from 'react'
import { connect } from 'react-redux'
import { increment, incrementBy, decrement } from '../store/action-reducers/counter';
import { useNavigate } from 'react-router-dom';

function Counter(props) {
    let navigate = useNavigate();
    const navigateToUserPage = () => {
        navigate(`/users?userId=${props.currentCounter}`);
    }
    return (
        <div>
            <h1 data-testid="counterLabel">Current Value {props.currentCounter}</h1>
            <button data-testid="incrementBtn" onClick={props.increment}>
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

export default connect(mapStateToProps, { increment, decrement, incrementBy })(Counter);