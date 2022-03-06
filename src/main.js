const { Intents } = require('discord.js');
const config = require('./data/config.json');
const { Client } = require('./models/Client.js');
const { CommandHandler } = require('./models/handlers/CommandHandler.js');

/*
@Param {new Client()} extends the baseClient() of discord.
Define this, you'll need to access this later on.
*/
const client = new Client({
    /*
    Intents are required since Discord's api v9.
    Type: Number[] || FLAGS[]
    Required: yes
    */
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ],
    /*
    @Param {ownerId} is an array of ownerId's.
    Type: String[]
    Required: no
    */
    ownerId: ['482513687417061376'],
    /*
    @Param {clientId} is the ID of the bot, this is for application commands.
    Type: String
    Required: while using application commands: yes, while using message commands: no
    */
    clientId: '847559736768987157',
    /*
    @Param {guildId} is the ID of the server you test your application commands in.
    Type: String
    Required: while using application commnads: yes, while using message commands: no
    */
    guildId: '784094726432489522',
    /*
    @Param {prefix} is an array of the prefix' you want the bot to respond to.
    Type: String[]
    Required: while using application commands: no, while using message commands: yes
    */
    prefix: config.prefix,
    /*
    @Param {token} this is the bot's token found on Discord Developer Portal
    Type: String
    Required: yes
    */
    token: config.token,
    /*
    @Param {logging} this will display an online log, `<yourCurrentTime> | <yourBotName> logged in.`
    Type: Boolean
    Required: no
    */
    logging: true
})
/*
@Param {new CommandHandler()} is a built in command handler. Requires the pervious client to be parsed through.
Define this, you'll need to access this later on.
*/
let commandHandler = new CommandHandler(client);

/*
@Param {.load()} is used to load your commands.
*/
commandHandler.load(
    /*
    @Param {client} is required to set the commands to your bot.
    Required: yes
    */
    client,
    /*
    @Param {type} this is to load the type of commands
    Type: 'interaction' || 'message'
    Required: yes
    */
    'message',
    /*
    @Param {path} this is where you have your commands saved.
    Type: String
    Required: yes
    */
    './src/commands/message',
    /*
    @Param {logging} this is another logger but this time for commands. `<yourCurrentTime> | Loaded message commands: <yourCommands>.`
    Type: Boolean
    Required: yes
    */
    true
)
commandHandler.load(/*
@Param {client} is required to set the commands to your bot.
Required: yes
*/
    client,
    /*
    @Param {type} this is to load the type of commands
    Type: 'interaction' || 'message'
    Required: yes
    */
    'message',
    /*
    @Param {path} this is where you have your commands saved.
    Type: String
    Required: yes
    */
    './src/commands/message',
    /*
    @Param {logging} this is another logger but this time for commands. `<yourCurrentTime> | Loaded message commands: <yourCommands>.`
    Type: Boolean
    Required: yes
    */
    true,
    /*
    @Param {global} this is for enabling your commands globally or locally. Default is false.
    Type: Boolean
    Required: no
    */
    false
)