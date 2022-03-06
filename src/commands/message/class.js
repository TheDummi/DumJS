const { Command } = require('../../models/handlers/Command.js');

/**
 * A test command the class way
 */

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
