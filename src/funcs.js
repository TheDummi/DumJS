const fs = require('fs');
const Discord = require('discord.js');
const moment = require('moment');
const config = require('./data/config.json');
function getTime(date) {
    return moment(Number(date)).format("H:mm:ss");
}
module.exports = {
    getTime: getTime
}