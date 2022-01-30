const Discord = require('discord.js');
const client = new Discord.Client();

const fs = require('fs');
const moment = require('moment');
const config = require('../data/config.json');
const { random, load } = require('../funcs.js');

const prefix = config.prefix;
const richPresence = config.richPresence;
const color = config.color;
const token = config.token;
load(client)

client.on('ready', async () => {
    let timestamp = Number(new Date());
    let time = () => moment(timestamp).format("H:mm:ss");
    let rp = () => richPresence[random(richPresence.length)]
    console.log(`${time()} | ${client.user.username} signed into ${client.guilds.cache.size} server, with prefix': ${prefix}`)

    client.user.setPresence({
        activity: {
            type: "WATCHING",
            name: rp()
        }
    })
})

client.on('message', async (message) => {
    if (message.author.bot) return;
    if (message.content.startsWith(`<@${client.user.id}>`) || message.content.startsWith(`<@!${client.user.id}>`)) {
        let embed = new Discord.MessageEmbed()
            .setTitle('my prefix')
            .setDescription(`${prefix}`)
            .setColor(color)
        await message.channel.send(embed)
    }
    if (!message.content.startsWith(prefix)) return;
    let args = message.content.replace(prefix, "").split(/ +/);
    const command = args.shift().toLowerCase();
    if (command.startsWith(prefix) || command == "") return;
    if (!client.commands.has(command)) {
        message.delete()
        return message.channel.send('not a command or alias!').then(async message => { setTimeout(async () => { message.delete() }, 2000) })
    }
    else {
        client.commands.get(command).execute(message, args).catch(async err => {
            if (err) console.log(err);
        })
    }

})

client.on('messageUpdate', async (message, newMessage) => {
    if (message.author.bot) return;
    let args = newMessage.content.replace(prefix, "").split(/ +/);
    const command = args.shift().toLowerCase();
    if (command) {
        client.commands.get(command).execute(message, args).catch(async err => {
            if (err) console.log(err);
        })
        if (command == 'ping' || command == 'p') {
            await message.channel.send('This ping is generated from the time the original message got sent!')
        }
    }
    else {
        return;
    }
})

client.login(token)