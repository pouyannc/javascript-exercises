const sumAll = function(int1, int2) {
    let sum = 0;
    if (!(int1 >= 0) || !(int2 >= 0)) return "ERROR";
    if (!(typeof(int1) == "number") || !(typeof(int2) == "number")) return "ERROR";

    let [smallInt, bigInt] = (int1 > int2) ? [int2, int1] : [int1, int2];
    for (let i = smallInt; i <= bigInt; i++) {
        sum += i;
    }
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
