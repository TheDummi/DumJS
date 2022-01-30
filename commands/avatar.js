const Discord = require('discord.js');

module.exports = {
    name: 'avatar',
    aliases: 'av',
    description: 'get someone\'s profile picture',
    async execute(message, args) {
        let user = message.mentions.users.first() || message.author;
        let embed = new Discord.MessageEmbed()
            .setAuthor(`${user.username}'s avatar`)
            .setImage(user.displayAvatarURL({ dynamic: true, size: 4096 }))
        message.channel.send(embed)
    }
}