const Discord = require('discord.js');
const { getTime } = require('../funcs.js');



class Client extends Discord.Client {
    constructor(options = {}) {
        super(options)
        const {
            intents = [],
            prefix = [],
            ownerId = [],
            clientId = "",
            guildId = "",
            token = "",
            logging = false
        } = options;

        this.intents = typeof intents == 'number' ? intents : console.log(new Error(`Expected intents to be a number, got ${typeof intents} instead.`))

        const client = new Discord.Client({ intents: [intents] })

        this.prefix = Array.isArray(prefix) ? prefix : console.log(new Error(`Expected prefix to be an array, got ${typeof prefix} instead.`));

        this.ownerId = Array.isArray(ownerId) ? ownerId : console.log(new Error(`Expected ownerId to be an array, got ${typeof ownerId} instead.`));

        this.clientId = typeof clientId == 'string' ? clientId : console.log(new Error(`Expected clientId to be a string, got ${typeof clientId} instead.`));

        this.guildId = typeof guildId == 'string' ? guildId : console.log(new Error(`Expected guildId to be a string, got ${typeof guildId} instead.`));

        this.token = typeof token == 'string' ? token : console.log(new Error(`Expected token to be a string, got ${typeof token} instead.`));

        this.logging = typeof logging == 'boolean' ? logging : console.log(new Error(`Expected logging to be a boolean, got ${typeof logging} instead.`))

        client.login(this.token)
            .then(() => {
                if (logging == true) {
                    console.log(`${getTime(new Date())} | ${client.user.username} logged in.`)
                }
            })
            .catch(error => {
                throw error
            })
    }
}

module.exports = { Client };