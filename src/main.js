const { Intents } = require('discord.js');
const config = require('./data/config.json');
const { Client } = require('./models/Client.js');
const { CommandHandler } = require('./models/handlers/CommandHandler.js');

/**
* @param extends the baseClient() of discord.
* Define this, you'll need to access this later on.
*/
const client = new Client({
    /**
    * Intents are required since Discord's api v9.
    * @type {number[] | FLAGS}
    * @required
    */
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ],

    /**
    * An array of ownerIds.
    * @type {string[]}
    * Required: no
    */
    ownerId: ['482513687417061376'],

    /**
    * @param {clientId} is the ID of the bot, this is for application commands.
    * @type String
    * Required: while using application commands: yes, while using message commands: no
    */
    clientId: '847559736768987157',

    /**
    * @param {guildId} is the ID of the server you test your application commands in.
    * @type String
    * Required: while using application commnads: yes, while using message commands: no
    */
    guildId: '784094726432489522',

    /**
    * @param {prefix} is an array of the prefix' you want the bot to respond to.
    * @type String[]
    * Required: while using application commands: no, while using message commands: yes
    */
    prefix: config.prefix,

    /**
    * @param {token} this is the bot's token found on Discord Developer Portal
    * @type String
    * Required: yes
    */
    token: config.token,

    /**
    * @param {logging} this will display an online log, `<yourCurrentTime> | <yourBotName> logged in.`
    * @type Boolean
    * Required: no
    */
    logging: true
})

/**
* @param {new CommandHandler()} is a built in command handler. Requires the pervious client to be parsed through.
* Define this, you'll need to access this later on.
*/
let commandHandler = new CommandHandler(client);

/**
* @param {.load()} is used to load your commands.
*/
commandHandler.load(
    /**
    * @param {client} is required to set the commands to your bot.
    * Required: yes
    */
    client,

    /**
    * @param {type} this is to load the type of commands
    * @type 'interaction' || 'message'
    * Required: yes
    */
    'message',

    /**
    * @param {path} this is where you have your commands saved.
    * @type String
    * Required: yes
    */
    './src/commands/message',

    /**
    * @param {logging} this is another logger but this time for commands. `<yourCurrentTime> | Loaded message commands: <yourCommands>.`
    * @type Boolean
    * Required: yes
    */
    true
)
commandHandler.load(
    /**
    * @param {client} is required to set the commands to your bot.
    * Required: yes
    */
    client,

    /**
    * @param {@type} this is to load the @type of commands
    * @type 'interaction' || 'message'
    * Required: yes
    */
    'interaction',

    /**
    * @param {path} this is where you have your commands saved.
    * @type String
    * Required: yes
    */
    './src/commands/interaction',

    /**
    * @param {logging} this is another logger but this time for commands. `<yourCurrentTime> | Loaded interaction commands: <yourCommands>.`
    * @type Boolean
    * Required: yes
    */
    true,

    /**
    * @param {global} this is for enabling your commands globally or locally. Default is false.
    * @type Boolean
    * Required: no
    */
    false
)