// function asserThrows(func) {

// }

// function multiply() {
//     var x = 2;
//     var y = 2;

//     return x * y;
// }

var asserThrows = function(func, x, y) {
    var threw = false;

    try {
        func(x, y);
    } catch (err) {
        // If func throws an error, note it
        threw = true;
    }

    if (!threw) {
        console.log('Function did not throw.');
    } else {
        console.log('Function threw, as expected.');
    }

    return threw;
};

var multiply = function(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw 'Either x or y is not a number. Please try again with numbers.';
    } else {
        return x * y
    };
};

// Test whether multiply throws an exceptin when given bad input
// asserThrows(multiply, 'a', 2);

// Test where function does not throw
asserThrows(multiply, 2, 2);