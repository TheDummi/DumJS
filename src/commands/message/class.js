const { Command } = require('../../models/handlers/Command.js');

class TestCommand extends Command {
    constructor() {
        super('class', {
            description: 'hiii'
        })
    }

    exec(message) {
        message.channel.send('hi')
    }
}

module.exports = TestCommand;
