const { CommandHandler } = require('./CommandHandler.js');

class Command extends CommandHandler {
    constructor(id, options = {}) {
        super(id, options)

        const {
            name = "",
            type = 'message',
            aliases = [],
            description = "",
            detailedDescription = "",
            owner = false,
            admin = false,
            channel = null,
            data = {}
        } = options;

        this.name = typeof name == 'string' ? name : console.log(new Error(`Expected name to be a string, got ${typeof name} instead.`))
    }
    exec() {

    }
}

module.exports = { Command };