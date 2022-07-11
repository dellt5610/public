function add(a, b){
    if (isNaN(a) || isNaN(b)) throw new Error('Type Error');
    return a + b;
}

function addCallback(a, b, cb){
    setTimeout(() => {
        if (isNaN(a) || isNaN(b)) cb(new Error('Type Error'));
        cb(null, a + b);
    }, 500);
}

function addPromise(a, b){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isNaN(a) || isNaN(b)) reject(new Error('Type Error'));
            resolve(a + b);
        }, 500);

    });
}

module.exports = {add, addCallback, addPromise};