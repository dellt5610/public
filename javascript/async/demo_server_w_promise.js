console.log('***to run this demo, the server.js needs to be run first***');
const request = require('request');

function congPromise(a,b){
    return new Promise((resolve, reject)=>{
        const url = `http://localhost:3000/tinh/CONG/${a}/${b}`;
        if (isNaN(a) || isNaN(b)) return reject(new Error('Type Error!'));
        request(url, (error, response, body) => {
            if (error) return reject(error);
            resolve(body);
        })
    });
}

function truPromise(a,b){
    return new Promise((resolve, reject) => {
        const url = `http://localhost:3000/tinh/TRU/${a}/${b}`;
        if (isNaN(a) || isNaN(b)) return reject(new Error('Type Error!'));
        request(url, (error, response, body) => {
            if (error) return reject(error);
            resolve(body);
        })
    });
}


function nhanPromise(a,b){
    return new Promise((resolve, reject) => {
        const url = `http://localhost:3000/tinh/NHAN/${a}/${b}`;
        if (isNaN(a) || isNaN(b)) return reject(new Error('Type Error!'));
        request(url, (error, response, body) => {
            if (error) return reject(error);
            resolve(body);
        })
    });
}

function chiaPromise(a,b){
    return new Promise((resolve, reject) => {
        const url = `http://localhost:3000/tinh/CHIA/${a}/${b}`;
        if (isNaN(a) || isNaN(b)) return reject(new Error('Type Error!'));
        request(url, (error, response, body) => {
            if (error) return reject(error);
            resolve(body);
        })
    });
}

function tinhDienTichHinhThang_C1(a, b, h, cb){
    //dien thich hinh thang: (a+b)*h/2
    congPromise(a,b)
    .then(tong => nhanPromise(tong, h))
    .then(tich => chiaPromise(tich, 2))
    .then(result => cb(null, result))
    .catch(error => cb(error));
}

function tinhDienTichHinhThang_C2(a, b, h){
    return congPromise(a,b)
    .then(tong => nhanPromise(tong, h))
    .then(tich => chiaPromise(tich, 2));    
}

/*
congPromise(4,5)
.then(tong => nhanPromise(tong, 6))
.then(tich => chiaPromise(tich, 2))
.then(kq => console.log(kq))
.catch(error => console.log(error.message));

tinhDienTichHinhThang_C1(4,5,6, (error, result) => {console.log('ket qua hinh thang C1: ' + result);});
tinhDienTichHinhThang_C2(4,5,6)
.then(result => {console.log('ket qua hinh thang C2: ' + result)})
.catch(error => console.log(error.message));
*/


congPromise(4,5)
.then(tong => {nhanPromise(tong, 6)})
.then(tich => chiaPromise(tich, 2))
.then(kq => console.log(kq))
.catch(error => console.log(error.message));


congPromise(4,5)
.then(tong => {return nhanPromise(tong, 6)})
.then(tich => chiaPromise(tich, 2))
.then(kq => console.log(kq))
.catch(error => console.log(error.message));


congPromise(4,5)
.then(tong => {return 10})
.then(tich => chiaPromise(tich, 2))
.then(kq => console.log(kq))
.catch(error => console.log(error.message));

async function tinhDienTich(a, b, c){
    const tong = await congPromise(a, b);
    const tich = await nhanPromise(tong, c);
    const kq = await chiaPromise(tich, 2);
    return kq; //return Promise(kq)
}

tinhDienTich(4,5,6)
.then(kq => console.log(`kq = ${kq}`))
.catch(error => console.log(error.message));