const request = require('request');

function getTempByCityName(cityName){
    const URL = 'http://api.openweathermap.org/data/2.5/weather?appid=01cc37655736835b0b75f2b395737694&units=metric&q=' + cityName;

    request(URL, (error, response, body) => {
        if (error) return console.log(error.message);
        const obj = JSON.parse(body);
        const temp = obj.main.temp;
        console.log(temp);
    });
}

function getTempByCityName(cityName, cb){
    const URL = 'http://api.openweathermap.org/data/2.5/weather?appid=01cc37655736835b0b75f2b395737694&units=metric&q=' + cityName;

    request(URL, (error, response, body) => {
        if (error) return cb(error,null);
        const obj = JSON.parse(body);
        if (!obj.main) return cb(new Error('Cannot find city.'), null);
        cb(null,obj.main.temp);
    });
}

//getTempByCityName('HaNoi');
//getTempByCityName('HaNoi',console.log);
const tempCali = getTempByCityName('California', (error, result) => {
    if (error) return console.log(error.message);
    console.log(result);
});
console.log('temp of cali = ' + tempCali);

