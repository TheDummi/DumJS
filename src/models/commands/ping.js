module.exports = {
    name: "ping",
    description: "ping",
    type: 'message',
    async execute(message) {
        message.reply('Pong')
    }
}