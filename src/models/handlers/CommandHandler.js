const fs = require('fs');
const { getTime } = require('../../funcs');
const Discord = require('discord.js');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');

/**
 * ! This is all still work in progress!
 */

class CommandHandler {
    constructor(client) {
        client.commands = new Discord.Collection()
    }

    load(client, type, path, logging, global) {
        if (type == 'interaction' && global == false && (!client.options.guildId || !client.options.clientId)) throw new Error(`Expected guildId and clientId to be strings, got ${typeof client.guildId || typeof client.clientId} instead.`)
        if (type == 'interaction') {
            const interactionCommandFiles = fs.readdirSync(path).filter(file => file.endsWith('.js'))

            for (const file of interactionCommandFiles) {
                let command = require(`../../.${path}/${file}`)
                command.data.toJSON();
                client.commands.set(command.data.name, command)
            }

            client.once('ready', () => {
                const rest = new REST({ version: '9' }).setToken(token);
                (async () => {
                    try {
                        if (global == true) {
                            rest.put(Routes.applicationCommands(client.clientId), {
                                body: commands
                            })
                            let guilds = await client.guilds.fetch()
                            await console.log(`${getTime(new Date())} | Successfully loaded application commands globally in ${guilds.size} guilds.`)
                        }
                        else {
                            rest.put(Routes.applicationGuildCommands(client.clientId, client.guildId), {
                                body: commands
                            })
                            await console.log(`${getTime(new Date())} | Successfully loaded application commands locally.`)
                        }
                    }
                    catch (error) {
                        await console.log(`${getTime(new Date())} | Loading application commands failed.`, error)
                    }
                })();
            })

            if (logging == true) console.log(`${getTime(new Date())} | Loaded interaction commands: ${Array.from(interactionCommandFiles).join(', ') || 'No commands found'}.`.replace(/.js/g, ""))
            return;
        }

        if (type == 'message') {
            let messageCommandFiles = fs.readdirSync(`${path}`).filter(file => file.endsWith('.js'))

            for (const file of messageCommandFiles) {
                let command = require(`../../.${path}/${file}`)
                client.commands.set(command.name, command)
            }

            if (logging == true) console.log(`${getTime(new Date())} | Loaded message commands: ${messageCommandFiles ? Array.from(messageCommandFiles).join(', ') : 'No commands found'}.`.replace(/.js/g, ""))
            return;
        }

        else console.log(new Error(`Expected type to be interaction or message, got ${type} instead.`));

    }
}

module.exports = { CommandHandler };