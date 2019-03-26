const { isValidType } = require('./validators')

const isRequiredsNeededBuyer = body => {
    const requireds = [
        isValidType(body, 'name', 'string'),
        isValidType(body, 'email', 'string'),
        isValidType(body, 'address', 'string'),
        isValidType(body, 'payment_info', 'string'),
    ];


    if (requireds.some(isValid => isValid === false)) {
        return true;
    }

    return false;
}

const isRequiredsNeededSeller = body => {
    const requireds = [
        isValidType(body, 'name', 'string'),
        isValidType(body, 'email', 'string'),
        isValidType(body, 'seller_id', 'string'),
    ];


    if (requireds.some(isValid => isValid === false)) {
        return true;
    }

    return false;
}

const isRequiredsNeededUpdateSeller = (body) => {
    const requireds = [
        isValidType(body, 'name', 'string'),
        isValidType(body, 'email', 'string'),
    ];


    if (requireds.some(isValid => isValid === false)) {
        return true;
    }

    return false;
}

module.exports = { isRequiredsNeededBuyer, isRequiredsNeededSeller, isRequiredsNeededUpdateSeller, }
