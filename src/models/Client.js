const Discord = require('discord.js');
const { getTime } = require('../funcs.js');
const fs = require('fs')
/**
 * @param {Client extends Discord.Client}
 */
class Client extends Discord.Client {
    constructor(options = {}) {
        super(options)

        /**
         * @param {options} - set the options for the client.
         */
        const {
            intents = [],
            prefix = [],
            ownerId = [],
            clientId = "",
            guildId = "",
            token = "",
            logging = false
        } = options;

        /**
        * @param {intents} - these are required in Discord API v9 or higher
        * @type {number[]}
        * @required
        */
        this.intents = typeof intents == 'number' ? intents : console.log(new Error(`Expected intents to be a number, got ${typeof intents} instead.`))

        /** 
        * @param {client} - creates the discord client.
        */
        const client = new Discord.Client({ intents: [intents] })

        /**
        * @param {prefix} - bot prefix'
        * @type {string[]}
        */
        this.prefix = Array.isArray(prefix) ? prefix : console.log(new Error(`Expected prefix to be an array, got ${typeof prefix} instead.`));

        /**
        * @param {ownerId} - array of ownerId's
        * @type {string[]}
        */
        this.ownerId = Array.isArray(ownerId) ? ownerId : console.log(new Error(`Expected ownerId to be an array, got ${typeof ownerId} instead.`));

        /**
        * @param {clientId} - bot id
        * @type {string}
        */
        this.clientId = typeof clientId == 'string' ? clientId : console.log(new Error(`Expected clientId to be a string, got ${typeof clientId} instead.`));

        /**
        * @param {guildId} - test server id
        * @type {string}
        */
        this.guildId = typeof guildId == 'string' ? guildId : console.log(new Error(`Expected guildId to be a string, got ${typeof guildId} instead.`));

        /**
        * @param {token} - bot token
        * @type {string}
        * @required
        */
        this.token = typeof token == 'string' ? token : console.log(new Error(`Expected token to be a string, got ${typeof token} instead.`));

        /**
        * @param {logging} - ready logging
        * @type {boolean}
        */
        this.logging = typeof logging == 'boolean' ? logging : console.log(new Error(`Expected logging to be a boolean, got ${typeof logging} instead.`))

        /** 
        * @param {client.login()} - login of the bot
        */
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