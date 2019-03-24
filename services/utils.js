const {isValidType} = require('./validators')

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

module.exports = { isRequiredsNeededBuyer, }
