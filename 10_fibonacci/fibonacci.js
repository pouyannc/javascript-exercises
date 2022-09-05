const fibonacci = function(n) {
    n = parseInt(n);
    if (n < 1) return "OOPS";
    let fib = [0,1,1];
    for (let i = 3; i<=n; i++) {
        fib.push(fib[i-2]+fib[i-1]);
    }
    return fib[n];
};

// Do not edit below this line
module.exports = fibonacci;
