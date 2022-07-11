console.log('***to run this demo, the server.js needs to be run first***');
const request = require('request');

function cong(a, b, cb) {
    const url = `http://localhost:3000/tinh/CONG/${a}/${b}`;
    if (isNaN(a) || isNaN(b)) return cb(new Error('Type error.'));
    request(url, (error, response, body) => {
        if (error) return cb(error, null);
        cb(null, body);
    });
}

function nhan(a, b, cb) {
    const url = `http://localhost:3000/tinh/NHAN/${a}/${b}`;
    if (isNaN(a) || isNaN(b)) return cb(new Error('Type error.'));
    request(url, (error, response, body) => {
        if (error) return cb(error, null);
        cb(null, body);
    });
}

function chia(a, b, cb) {
    const url = `http://localhost:3000/tinh/CHIA/${a}/${b}`;
    if (isNaN(a) || isNaN(b)) return cb(new Error('Type error.'));
    if (b == 0) return cb(new Error('Divide by zero.'));
    request(url, (error, response, body) => {
        if (error) return cb(error, null);
        cb(null, body);
    });
}

function tinh(a, b, c, d, cb) {
    cong(a, b, (errorCong, tong) => {
        if (errorCong) return cb(errorCong);
        nhan(tong, c, (errorNhan, tich) => {
            if (errorNhan) return cb(errorNhan);
            chia(tich, d, (errorChia, result) => {
                if (errorChia) return cb(errorChia);
                cb(null, result);
            })
        })
    });
}

tinh(4, 5, 6, 0, (error, result) => {
    if (error) return console.log(error);
    console.log(result);
}); 
