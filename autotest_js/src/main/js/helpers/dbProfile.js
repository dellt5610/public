const dbProfile = function getDbUrl(){
    if (process.env.NODE_ENV === 'production') return '';
    if (process.env.NODE_ENV === 'test') return 'mongodb://localhost/autotest_js_test';
    return 'mongodb://localhost/autotest_js';
}

module.exports = { dbProfile:dbProfile() };