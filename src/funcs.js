/**
 * @param {functions} - for the Client
 */

const moment = require('moment');

function getTime(date) {
    return moment(Number(date)).format("H:mm:ss");
}

module.exports = {
    getTime: getTime
}