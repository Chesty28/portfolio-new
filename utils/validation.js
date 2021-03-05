const VALIDATOR_TYPE_MIN = 'MIN';
const VALIDATOR_TYPE_MAX = 'MAX';
const VALIDATOR_TYPE_EMAIL = 'EMAIL';

export const VALIDATOR_MIN = val => {
    return {
        type: VALIDATOR_TYPE_MIN,
        val: val
    }
};

export const VALIDATOR_MAX = val => {
    return {
        type: VALIDATOR_TYPE_MAX,
        val: val
    }
};

export const VALIDATOR_EMAIL = () => {
    return {
        type: VALIDATOR_TYPE_EMAIL
    }
};

export const validate = (val, validators) => {
    let isValid = true;

    for (let validator of validators) {
        switch (validator.type) {
            case VALIDATOR_TYPE_MIN:
                isValid = val.trim().length >= validator.val && isValid;
                break;
            case VALIDATOR_TYPE_MAX:
                isValid = val.trim().length <= validator.val && isValid;
                break;
            case VALIDATOR_TYPE_EMAIL:
                isValid = /^\S+@\S+\.\S+$/.test(val) && isValid;
                break;
            default:
                throw new Error('INVALID VALIDATOR TYPE');
        }
    }

    return isValid;
};