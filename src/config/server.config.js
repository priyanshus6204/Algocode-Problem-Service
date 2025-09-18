const dotenv = require('dotenv');

dotenv.config({path: 'C:/Users/priya/AlgoCodeBackend/Algocode-Problem-Service/.env'});

console.log(process.env.PORT);

module.exports = {
    PORT : process.env.PORT
};  