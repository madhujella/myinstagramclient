import React, { useState } from 'react';
import useReactRouter from 'use-react-router';
import { useSelector, useDispatch } from 'react-redux';
import { COUNTER } from '../store/actions';

const inc = () => {
    return {type: COUNTER}
}

const Auth = (props) => {
    const { email, username, password } = useState(0);
    const { history, location, match } = useReactRouter();
    const id = useSelector(state => state.id);
    const dispatch = useDispatch();
    console.log(history, location, match)
    console.log(id)
    return (
        <div>
            <button onClick={dispatch(inc())}>increment</button>
        </div>
    )
}

export default Auth;