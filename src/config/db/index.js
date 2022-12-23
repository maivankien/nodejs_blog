// Using Node.js `require()`
const mongoose = require('mongoose');

// Using ES6 imports
// import mongoose from 'mongoose';

const connect = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/f8_education_dev');
        console.log('Connect successfully');
    } catch (error) {
        console.log('connect error');
    }
};

module.exports = { connect };
