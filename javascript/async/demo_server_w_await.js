const request = require('request');

function congPromise(a, b){
    return new Promise((resolve, reject) => {
        const url = `http://localhost:3000/tinh/CONG/${a}/${b}`;

        if (isNaN(a) || isNaN(b)) reject(new Error('Type Error'));
        request(url, (error, response, body) => {
            if (error) return reject(error);
            resolve(body);
        })
    })
}

function truPromise(a, b){
    return new Promise((resolve, reject) => {
        const url = `http://localhost:3000/tinh/TRU/${a}/${b}`;

        if (isNaN(a) || isNaN(b)) reject(new Error('Type Error'));
        request(url, (error, response, body) => {
            if (error) return reject(error);
            resolve(body);
        })
    })
}

function nhanPromise(a, b){
    return new Promise((resolve, reject) => {
        const url = `http://localhost:3000/tinh/NHAN/${a}/${b}`;

        if (isNaN(a) || isNaN(b)) reject(new Error('Type Error'));
        request(url, (error, response, body) => {
            if (error) return reject(error);
            resolve(body);
        })
    })
}

function chiaPromise(a, b){
    return new Promise((resolve, reject) => {
        const url = `http://localhost:3000/tinh/CHIA/${a}/${b}`;

        if (isNaN(a) || isNaN(b)) reject(new Error('Type Error'));
        if (b == 0) reject(new Error('Divide by zero'));
        request(url, (error, response, body) => {
            if (error) return reject(error);
            resolve(body);
        })
    })
}

async function tinhDienTinhHinhThang(daynho, daylon, chieucao){
    const kqCong = await congPromise(daynho, daylon);
    console.log(`kqCong=${kqCong}`);
    
    const kqNhan = await nhanPromise(kqCong, chieucao);
    console.log(`kqNhan=${kqNhan}`);

    const kqChia = await chiaPromise(kqNhan, 2);
    console.log(`kqChia=${kqChia}`);

    console.log(`dien tich hinh thang = (daynho+daylon)*chieucao/2 = ${kqChia}`);
}

function tinhDienTinhHinhThang_sync(daynho, daylon, chieucao){
    const kqCong = daynho + daylon;
    console.log(`kqCong=${kqCong}`);
    
    const kqNhan = kqCong * chieucao;
    console.log(`kqNhan=${kqNhan}`);

    const kqChia = kqNhan / 2;
    console.log(`kqChia=${kqChia}`);

    console.log(`dien tich hinh thang = (daynho+daylon)*chieucao/2 = ${kqChia}`);
}
/*
tinhDienTinhHinhThang(4,5,6);
tinhDienTinhHinhThang(4,5,6);
tinhDienTinhHinhThang(4,5,6);

tinhDienTinhHinhThang_sync(4,5,6);
tinhDienTinhHinhThang_sync(4,5,6);
tinhDienTinhHinhThang_sync(4,5,6);
*/

// congPromise(10,'x')
// .catch(error => console.log(error.message))//prints Type Error
// .then(result => console.log('result = ' + result));//prints undefined


congPromise(10,'x')
.then(result => console.log('result = ' + result))//prints nothing
.catch(error => console.log(error.message));//prints Type Error
