const palindromes = function (string) {
    const filteredStr = [...string].filter(char => char.search(regArg) != -1).join("").toLowerCase();
    const reverseFilteredStr = [...filteredStr].reverse().join("");
    return (filteredStr == reverseFilteredStr)
};

const regArg = /[a-z]/ig;

// Do not edit below this line
module.exports = palindromes;
