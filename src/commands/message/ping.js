/**
 * A test command non class way.
 */

module.exports = {
    name: 'ping',
    aliases: 'p',
    description: 'bot latency',
    async execute(message) {
        let m = await message.channel.send(`My ping is: calculating...`)
        await m.edit(`My ping is: ${m.createdTimestamp - message.createdTimestamp}ms.`)
    }
}