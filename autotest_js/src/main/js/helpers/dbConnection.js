const { dbProfile } = require('./dbProfile');
const mongoose = require('mongoose');

mongoose.connect(dbProfile)
.then(() => {
    console.log('Database URL: ' + dbProfile);
    console.log('Database connected!');
})
.catch(error => {
    console.log(error.message);
    process.exit(1);
});