/**
 * @param {functions} - for the Client
 */

const moment = require('moment');

function time(date) {
    return moment(Number(date)).format("H:mm:ss");
}

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

module.exports = {
    time: time,
    delay: delay
}