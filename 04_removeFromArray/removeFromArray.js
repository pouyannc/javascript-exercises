const removeFromArray = function(array, ...args) {
    return array.filter(i => !args.includes(i))
};

// Do not edit below this line
module.exports = removeFromArray;
