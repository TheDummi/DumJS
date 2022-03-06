const { SlashCommandBuilder } = require('@discordjs/builders');
const { color } = require('../../data/config.json');
const Discord = require('discord.js');

/**
 * A test command for interactions
 */

module.exports = {
    detailedDescription: "e",
    category: "Info",
    type: "interaction",
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription("e"),
    async execute(interaction) {
        let m = await interaction.channel.send('calculating...')
        m.delete()
        let ping = String(interaction.client.ws.ping);
        let api = m.createdTimestamp - interaction.createdTimestamp
        let embed = new Discord.MessageEmbed()
            .setTitle('PONG')
            .setColor(color)
            .setDescription(`API: ${api}ms.\nBot: ${ping}ms.`)
            .setTimestamp()
            .setFooter({ text: interaction.user.username, iconURL: interaction.user.avatarURL({ dynamic: true }) })
        await interaction.reply({ embeds: [embed] });
    },
};