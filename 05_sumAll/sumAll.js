const sumAll = function(a, b) {
    if a < b {
        let sum=a
        while(a !== b) {
            sum = sum + 1
        }
    }
    else {
        let sum=b
        while(b !== a) {
            sum = sum + 1
        }
    }
    return sum

};

// Do not edit below this line
module.exports = sumAll;
