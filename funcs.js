const fs = require('fs');
const Discord = require('discord.js');
const moment = require('moment');
const config = require('./data/config.json');

let timestamp = Number(new Date());
let time = () => moment(timestamp).format("H:mm:ss");

module.exports = {
    random(args) {
        let random = Math.floor(Math.random() * Math.random(args));
        return random;
    },
    async load(client) {
        client.commands = new Discord.Collection();
        let commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
        delete require.cache;
        let str;
        for (const file of commandFiles) {
            const command = require(`./commands/${file}`);
            client.commands.set((command.name), command);
            client.commands.set((command.aliases), command);
            str = str + ", " + String(file).match(command.name, "");
        }
        console.log(`${time()} | Loaded ${commandFiles.length} commands!\n${time()} | Commands list: [${str.replace("undefined, ", "")}]`)
    },

}