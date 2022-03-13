const { Intents } = require('discord.js');
const config = require('./data/config.json');
const { Client } = require('./models/Client.js');
const { delay } = require('./models/funcs.js');
const { CommandHandler } = require('./models/handlers/CommandHandler.js');

/**
* @param {new Client()} - extends the baseClient() of discord.
* Define this, you'll need to access this later on.
*/
const client = new Client({
    /**
    * @param {intents} - Intents are required for Discord's api v9 or above.
    * @type {number[] || FLAGS[]}
    * @required
    */
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ],

    /**
    * @param {ownerId} - is an array of ownerId's.
    * @type {string[]}
    */
    ownerId: ['482513687417061376'],

    /**
    * @param {clientId} - is the ID of the bot, this is for application commands.
    * @type {string}
    * @required when using application commands
    */
    clientId: '847559736768987157',

    /**
    * @param {guildId} - is the ID of the server you test your application commands in.
    * @type {string}
    * @required when using application commands globally
    */
    guildId: '784094726432489522',

    /**
    * @param {prefix} - is an array of the prefix' you want the bot to respond to.
    * @type {string[]}
    * @required when using message commands
    */
    prefix: config.prefix,

    /**
    * @param {token} - this is the bot's token found on Discord Developer Portal
    * @type {string}
    * @required
    */
    token: config.token,

    /**
    * @param {logging} - this will display an online log, `<yourCurrentTime> | <yourBotName> logged in.`
    * @type {boolean}
    */
    logging: true
});
console.log(client)
/**
* @param {new CommandHandler()} - is a built in command handler. Requires the pervious client to be parsed through.
* Define this, you'll need to access this later on.
*/
let commandHandler = new CommandHandler(client);

/**
* @param {load()} - is used to load your commands.
*/
commandHandler.load(
    /**
    * @param {client} - is required to set the commands to your bot.
    * @required
    */
    client,

    /**
    * @param {type} - this is to load the type of commands
    * @type {'interaction' || 'message'}
    * @required
    */
    'message',

    /**
    * @param {path} - this is where you have your commands saved.
    * @type {string}
    * @required
    */
    './src/commands/message',

    /**
    * @param {logging} - this is another logger but this time for commands. `<yourCurrentTime> | Loaded message commands: <yourCommands>.`
    * @type {boolean}
    */
    true
)
commandHandler.load(
    /**
    * @param {client} - is required to set the commands to your bot.
    * @required
    */
    client,

    /**
    * @param {@type} - this is to load the @type of commands
    * @type {'interaction' || 'message'}
    * @required
    */
    'interaction',

    /**
    * @param {path} - this is where you have your commands saved.
    * @type {string}
    * @required
    */
    './src/commands/interaction',

    /**
    * @param {logging} - this is another logger but this time for commands. `<yourCurrentTime> | Loaded interaction commands: <yourCommands>.`
    * @type {boolean}
    */
    true,

    /**
    * @param {global} - this is for enabling your commands globally or locally. Default is false.
    * @type {boolean}
    */
    false
)