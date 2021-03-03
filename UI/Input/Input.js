import React, { useReducer, useEffect } from 'react';
import { validate } from '../../utils/validation';

import s from './Input.module.css';


// Reducer
const inputReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE':
            return {
                ...state,
                value: action.val,
                isValid: validate(action.val, action.validators),
            };
        case 'TOUCH':
            return {
                ...state,
                isTouched: true
            }
        default:
            return state;
    }
};


// Component
const Input = props => {
    const [state, dispatch] = useReducer(inputReducer, {
        value: '',
        isValid: false,
        isTouched: false
    });

    const changeHandler = e => {
        dispatch({type: 'CHANGE', val: e.target.value, validators: props.validators});
    };

    const blurHandler = () => {
        dispatch({type: 'TOUCH'});
    }

    const { onInput, id } = props;
    const { value, isValid, isTouched } = state;

    useEffect(() => {
        onInput(state.value, state.isValid, id);
    }, [onInput, value, isValid, id]);






    if (props.element === 'input') {
        return (
            <>
            {!state.isValid && isTouched ? <p className={s.errorMessage}>{props.errormessage}</p> : null}
            <input 
                className={props.className}
                type={props.type}
                placeholder={props.placeholder}
                value={state.value} 
                onBlur={() => blurHandler()}
                onChange={e => changeHandler(e)}
            />
            </>
        )
    } else if (props.element === 'textarea') {
        return (
            <>
            {!state.isValid && isTouched ? <p className={s.errorMessage}>{props.errormessage}</p> : null}
            <textarea 
                className={props.className}
                placeholder={props.placeholder}
                value={state.value} 
                onBlur={() => blurHandler()}
                onChange={e => changeHandler(e)}
            />
            </>
        )
    }
};

export default Input;