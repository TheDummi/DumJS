const Discord = require('discord.js');
const config = require('./data/config.json');
const { Client } = require('./models/Client.js');
const { CommandHandler } = require('./models/handlers/CommandHandler.js');

const client = new Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES
    ],
    ownerId: ['482513687417061376'],
    clientId: '847559736768987157',
    guildId: '784094726432489522',
    prefix: config.prefix,
    token: config.token,
    logging: true
})

let commandHandler = new CommandHandler(client);

commandHandler.load(client, 'message', './src/commands/message', true, false)
commandHandler.load(client, 'interaction', './src/commands/interaction', true, false)