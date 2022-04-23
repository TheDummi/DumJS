const { Intents } = require('discord.js');
const { Client, CommandHandler, EventHandler } = require('xernerx');
const { guildId, token } = require('./data/config.json')

const client = new Client({
    intents: [Intents.FLAGS.GUILDS],
    prefix: ["js!"],
    ownerId: ["482513687417061376"]
})

const commands = new CommandHandler({
    client: client,
    guildId: guildId,
    global: false
})

const events = new EventHandler({ client: client })

commands.loadInteractionCommands("/src/commands/interaction")
commands.loadMessageCommands("/src/commands/message")

events.loadEvents("/src/events")

client.login(token)