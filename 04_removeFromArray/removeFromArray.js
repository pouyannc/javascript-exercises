const removeFromArray = function(array) {
    const filteredArray = array.filter((i) => {
        for (let x = 1; x < arguments.length; x++){
            if (i === arguments[x]) return false
            else continue; 
        }
        return true;
    })
    return filteredArray;
};

// Do not edit below this line
module.exports = removeFromArray;
